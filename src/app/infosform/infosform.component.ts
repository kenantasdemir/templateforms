import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-infosform',
  templateUrl: './infosform.component.html',
  styleUrls: ['./infosform.component.css']
})
export class InfosformComponent {

  @ViewChild("emailForm") myForm!:NgForm
  //ViewChild, Angular'da bir bileşen içindeki HTML öğelerine veya başka bir bileşene erişmek için kullanılan bir dekoratördür. 
  //ViewChild dekoratörü, HTML şablonundaki bir öğenin referansını almanızı ve bu öğeye programatik olarak erişmenizi sağlar.

  ad:string = "john"
  email:string ="john@gmail.con"

  onSubmit(){
    console.log(this.ad + " " + this.email)
  }

  resetForm(){
    this.myForm.resetForm()
  }

}
