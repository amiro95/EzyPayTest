import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EzypayHomeComponent } from '../app/ezypay-home/ezypay-home.component';

const routes: Routes = [
  {
    path: '',
    component: EzypayHomeComponent
  },
  {
    path: 'subscription',
    component: EzypayHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
