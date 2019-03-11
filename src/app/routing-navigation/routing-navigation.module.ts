import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingNavigationRoutingModule } from './routing-navigation-routing.module';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';

@NgModule({
  declarations: [RoutingNavigationComponent],
  imports: [
    CommonModule,
    RoutingNavigationRoutingModule
  ]
})
export class RoutingNavigationModule { }
