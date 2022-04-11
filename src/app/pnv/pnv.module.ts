import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PnvPageRoutingModule } from './pnv-routing.module';

import { PnvPage } from './pnv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PnvPageRoutingModule
  ],
  declarations: [PnvPage]
})
export class PnvPageModule {}
