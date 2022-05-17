import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointListsPageRoutingModule } from './point-lists-routing.module';

import { PointListsPage } from './point-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointListsPageRoutingModule
  ],
  declarations: [PointListsPage]
})
export class PointListsPageModule {}
