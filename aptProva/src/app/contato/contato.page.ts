import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  public conta: String;

  constructor() { }

  ngOnInit() {
  }

  public logar() :void{
    if((this.conta !== "")){
      alert("Login confirmado");
    }
     else{
      alert("Login recusado conta incorreta");
    }
  }
}
