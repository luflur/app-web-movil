import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public errors:any = {};
  //Para la contraseña
  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  //Función para verificar que se habilita la pantalla mobile
  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public login(){
    this.router.navigate(["home"]);
  }

  public recuperarPwd(){

  }

  public goRegistro(){
    this.router.navigate(["registro"]);
  }

}
