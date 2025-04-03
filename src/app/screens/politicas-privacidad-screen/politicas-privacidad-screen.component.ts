import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas-privacidad-screen',
  templateUrl: './politicas-privacidad-screen.component.html',
  styleUrls: ['./politicas-privacidad-screen.component.scss']
})

export class PoliticaPrivacidadScreenComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
