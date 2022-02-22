import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  items : any = [{src:"../../assets/andri.jpeg",text:'Andri Bonilla Guzman'}];

  constructor() { }

  ngOnInit() {
  }

}
