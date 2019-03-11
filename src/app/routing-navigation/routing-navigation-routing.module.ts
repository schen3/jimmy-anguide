import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';

const routes: Routes = [{
  path: '',
  component: RoutingNavigationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingNavigationRoutingModule { }
