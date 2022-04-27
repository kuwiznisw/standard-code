import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: 'promotions',
        loadChildren: () => import('../promotions/promotions.module').then(m => m.PromotionsPageModule)
      },
      {
        path: 'promotion',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/footer/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule {}
