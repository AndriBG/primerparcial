import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeromayorPage } from './numeromayor.page';

const routes: Routes = [
  {
    path: '',
    component: NumeromayorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeromayorPageRoutingModule {}
