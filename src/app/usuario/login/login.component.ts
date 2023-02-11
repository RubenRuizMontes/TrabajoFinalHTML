import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  submit(f: NgForm){
    if(f.value.email!='' && f.value.pwd!=''){
      this.router.navigate(['./home']);
      return
    }
    alert("Ingrese sus crendenciales")
  }
}
