import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Busqueda } from './busqueda.model';
import { BusquedaService } from './busqueda.service';
interface BusRes {
  hechos: Busqueda[];
  criteria: string;
}
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnDestroy{
  criteria: string ='';
  loading: boolean = false;
  criteriaSelected: BusRes = {hechos: [],criteria: ''};
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;
  constructor(public busquedaService: BusquedaService){
    this.subResponse = Subscription.EMPTY;
  }

  onCriteriaSelectedFromChild(criteria: number){
    // this.criteriaSelected = criteria;
    switch (criteria) {
      case 0:
        this.criteria='';
        this.criteriaSelected = {hechos: [],criteria: this.criteria};
        break;
      case 1:
        this.criteria='Para Alergias';
        this.busquedaService.getDogsLessFur();
        break;
      case 2:
        this.criteria='Hechos Historicos de Guerra';
        this.busquedaService.getHechGuerra();
        break;
      case 3:
        this.criteria='Imperio Romano';
        this.busquedaService.getImpRoma();
        break;
        case 4:
          this.criteria='Importantes Construcciones';
          this.busquedaService.getConstructions();
          break;  
      default:
        break;
    }
    this.loadingResponse = this.busquedaService.getLoading().subscribe(r=>{
      // console.log(r)
      this.loading=r;
    })
    this.subResponse = this.busquedaService.getBusquedaObservable().subscribe((r: Busqueda[])=>{
      this.criteriaSelected = {hechos: r, criteria: this.criteria};
    })
  }

  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}
