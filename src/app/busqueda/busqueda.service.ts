import { Injectable } from "@angular/core";
import { Busqueda } from "./busqueda.model";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from '../../../environments/environment.development';

// const apiKey = environment.apiKey;
// let headers = new HttpHeaders();
// headers = headers.set('X-Api-Key', apiKey);

@Injectable({providedIn: 'root'})
export class BusquedaService {
  apiKey:string = environment.apiKey;
  headers = new HttpHeaders();
  header = this.headers.set('X-Api-Key', this.apiKey);

  constructor(private http:HttpClient) {}
  private busqueda: Busqueda[] = [];
  private busquedaResults = new Subject<Busqueda[]>();
  public loading = new BehaviorSubject<boolean>(true);

  getHechGuerra(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/historicalevents?text=war", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }
  getConstructions(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/historicalevents?text=construction", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }
  getImpRoma(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/historicalevents?text=roman", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getDogsLessFur(){
    this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/dogs?shedding=0", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },);
  }

  getBusquedaObservable(){
    return this.busquedaResults.asObservable();
  }

  getLoading(){
    return this.loading;
  }
}
