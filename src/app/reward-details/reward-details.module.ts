import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardDetailsPageRoutingModule } from './reward-details-routing.module';

import { RewardDetailsPage } from './reward-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardDetailsPageRoutingModule
  ],
  declarations: [RewardDetailsPage]
})
export class RewardDetailsPageModule {}
