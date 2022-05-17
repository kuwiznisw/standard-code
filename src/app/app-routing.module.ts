import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'promotions',
    loadChildren: () => import('./promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
  {
    path: 'promotion1',
    loadChildren: () => import('./promotion1/promotion1.module').then( m => m.Promotion1PageModule)
  },
  {
    path: 'promotion2',
    loadChildren: () => import('./promotion2/promotion2.module').then( m => m.Promotion2PageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'tnc',
    loadChildren: () => import('./tnc/tnc.module').then( m => m.TncPageModule)
  },
  {
    path: 'pnv',
    loadChildren: () => import('./pnv/pnv.module').then( m => m.PnvPageModule)
  },
  {
    path: 'voucher-list',
    loadChildren: () => import('./voucher-list/voucher-list.module').then( m => m.VoucherListPageModule)
  },
  {
    path: 'reward-details',
    loadChildren: () => import('./reward-details/reward-details.module').then( m => m.RewardDetailsPageModule)
  },
  {
    path: 'voucher-details',
    loadChildren: () => import('./voucher-details/voucher-details.module').then( m => m.VoucherDetailsPageModule)
  },
  {
    path: 'point-lists',
    loadChildren: () => import('./point-lists/point-lists.module').then( m => m.PointListsPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
