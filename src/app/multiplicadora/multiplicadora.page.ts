import { Component, /*OnInit*/ } from '@angular/core';

@Component({
  selector: 'app-multiplicadora',
  templateUrl: './multiplicadora.page.html',
  styleUrls: ['./multiplicadora.page.scss'],
})
export class MultiplicadoraPage{

  	// Andri Manuel Bonilla Guzman - 20186551

	inputValue: string = '';
	d: number;
	public results: Array<object> = [];


  // constructor() { }

  // ngOnInit() {
  // }


  
	inputValueToLable() {
		this.results = [];
		let d = parseInt(this.inputValue.replace(/\D/g, ''));
		if (!isNaN(d))
			for (let i: number = 1; i <= 14; i++)
				this.results.push({ index: i, value: d, result: d * i });
	}

}
