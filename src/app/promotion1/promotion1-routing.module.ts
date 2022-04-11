import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionsPage } from '../promotions/promotions.page';

import { Promotion1Page } from './promotion1.page';

const routes: Routes = [
  {
    path: '',
    component: Promotion1Page,
  },
  {
    path: 'promotions',
    component: PromotionsPage,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotion1PageRoutingModule {}
