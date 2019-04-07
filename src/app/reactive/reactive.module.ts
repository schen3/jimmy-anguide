import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonsModule } from '../commons/commons.module';
import { IntroComponent } from './intro/intro.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    ReactiveComponent,
    IntroComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
