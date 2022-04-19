import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointListsPage } from './point-lists.page';

const routes: Routes = [
  {
    path: '',
    component: PointListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointListsPageRoutingModule {}
