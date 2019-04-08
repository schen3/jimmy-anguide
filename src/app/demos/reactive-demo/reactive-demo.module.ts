import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObservableDemoComponent } from './basic-observable-demo/basic-observable-demo.component';
import { ObserverInterfaceDemoComponent } from './observer-interface-demo/observer-interface-demo.component';
import { UnicastObservableDemoComponent } from './unicast-observable-demo/unicast-observable-demo.component';

@NgModule({
  declarations: [
    BasicObservableDemoComponent,
    ObserverInterfaceDemoComponent,
    UnicastObservableDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicObservableDemoComponent,
    ObserverInterfaceDemoComponent,
    UnicastObservableDemoComponent
  ]
})
export class ReactiveDemoModule { }
