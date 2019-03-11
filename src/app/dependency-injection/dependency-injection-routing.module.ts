import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

const routes: Routes = [{
  path: '',
  component: DependencyInjectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyInjectionRoutingModule { }
