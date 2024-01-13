import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  isOpen=false;
  showPass=false
  BankName="Lorem ipsum"
  TwoFactor=false
  verificationFileNem1="Upload file"
  verificationFileNem2="Upload file"
  verificationFileNem3="Upload file"
  verificationFileNem4="Upload file"
  verificationFileNem5="Upload file"
  verificationFileNem6="Upload file"
  verificationFileNem7="Upload file"
  verificationFileNem8="Upload file"
  verificationFileNem9="Upload file"
  verificationFileNem10="Upload file"
  selfieVerification="Upload file"
  CarnetVerification="Upload file"
  HomeVerification="Upload file"
  CrayolaVerification="Upload file"
  verifyStep1 =false
  verifyStep2 =false
  verifyStep3 =false
  ChangePassword=false
   BankList =[
    {name:"Banco del Estado de Chile"},
    {name:"Banco Santander-Chile"},
    {name:"SCOTIABANK CHILE"},
    {name:"Banco Falabella"},
   ]

   constructor(private fb:FormBuilder){
    console.log(this.TwoFactor)
   }

  //  profile Form
   profile= this.fb.group({
    NombreCompleto:["",Validators.required],
    CorreoElectronico:["",Validators.required],
    Domicilio:["",Validators.required],
    Ciudad:["",Validators.required],
    Pais:["",Validators.required],
    RegiónEstado:["",Validators.required],
    Nacionalidad:["",Validators.required],
    SeleccionarBanco:[this.BankName,Validators.required],
    BankAccount:["",Validators.required],
    Account:["",Validators.required],
    RUT:["",Validators.required],
   })

  BankNameChange(event:any){
    this.BankName=event.srcElement.innerText
    this.isOpen=false;
  }
  OpenDrop(){
    this.isOpen=!this.isOpen;
  }
  profileSubmit(){
    console.log(this.profile.value)
  }
  verifyStepOne(){
    this.verifyStep1=false
    this.verifyStep2=true
  }
  verifyStepTwo(){
    this.verifyStep2=!this.verifyStep2
  }
  verifyStepHide(){
    this.verifyStep1=false
    this.verifyStep2=false
    this.verifyStep3 =false
  }

}
