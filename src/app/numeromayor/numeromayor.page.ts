import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeromayor',
  templateUrl: './numeromayor.page.html',
  styleUrls: ['./numeromayor.page.scss'],
})
export class NumeromayorPage implements OnInit {

  // Andri Manuel Bonilla Guzman - 20186551
  num1: string = '';
  num2: string = '';
  Result: string = '';

  constructor() {}

  ngOnInit() {}

  inputValueToLable() {
      let c = parseInt(this.num1.replace(/\D/g, ''));
      let d = parseInt(this.num2.replace(/\D/g, ''));
      if (!isNaN(c) && !isNaN(d)) this.Result = (c >= d) ? (c).toString() : (d).toString();
      else this.Result = 'VALORES INCORRECTOS';
  }

}
