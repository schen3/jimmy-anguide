import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrappingComponent } from './bootstrapping/bootstrapping.component';

const routes: Routes = [{
  path: '',
  component: BootstrappingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrappingRoutingModule { }
