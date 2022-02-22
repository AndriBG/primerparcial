import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeromayorPageRoutingModule } from './numeromayor-routing.module';

import { NumeromayorPage } from './numeromayor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeromayorPageRoutingModule
  ],
  declarations: [NumeromayorPage]
})
export class NumeromayorPageModule {}
