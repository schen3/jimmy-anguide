import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObservableDemoComponent } from './basic-observable-demo/basic-observable-demo.component';
import { ObserverInterfaceDemoComponent } from './observer-interface-demo/observer-interface-demo.component';

@NgModule({
  declarations: [
    BasicObservableDemoComponent,
    ObserverInterfaceDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicObservableDemoComponent,
    ObserverInterfaceDemoComponent
  ]
})
export class ReactiveDemoModule { }
