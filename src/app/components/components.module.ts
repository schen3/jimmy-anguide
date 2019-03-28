import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';
import { StyleSelectorsComponent } from './style-selectors/style-selectors.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [ComponentsComponent, StyleSelectorsComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
