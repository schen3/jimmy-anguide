import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrappingRoutingModule } from './bootstrapping-routing.module';
import { BootstrappingComponent } from './bootstrapping/bootstrapping.component';

@NgModule({
  declarations: [BootstrappingComponent],
  imports: [
    CommonModule,
    BootstrappingRoutingModule
  ]
})
export class BootstrappingModule { }
