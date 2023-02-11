import { Component,Input } from '@angular/core';
import { Busqueda } from '../busqueda.model';
import { BusquedaService } from '../busqueda.service';
interface BusRes {
  hechos: Busqueda[];
  criteria: string;
}
@Component({
  selector: 'app-busqueda-result',
  templateUrl: './busqueda-result.component.html',
  styleUrls: ['./busqueda-result.component.css']
})
export class BusquedaResultComponent {
  @Input() criteriaListenedFromExternalComponent: BusRes = {hechos: [],criteria: ''};
  @Input() loading: boolean = false;
}
