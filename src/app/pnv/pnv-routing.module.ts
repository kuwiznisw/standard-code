import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PnvPage } from './pnv.page';

const routes: Routes = [
  {
    path: '',
    component: PnvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PnvPageRoutingModule {}
