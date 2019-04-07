import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonsModule } from '../commons/commons.module';
import { IntroComponent } from './intro/intro/intro.component';

@NgModule({
  declarations: [ReactiveComponent, IntroComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
