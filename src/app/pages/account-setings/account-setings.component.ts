import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-setings',
  templateUrl: './account-setings.component.html',
  styleUrls: ['./account-setings.component.css']
})
export class AccountSetingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public _document) { }

  ngOnInit() {
  }

  cambiartema(tema: string, link: any) {
    this.aplicarCheck(link);
    const URL = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', URL);
    
  }

  aplicarCheck(link: any) {
    console.log(link);
    const DOMitems: any = document.getElementsByClassName('selector');
    for (const ref of DOMitems){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
