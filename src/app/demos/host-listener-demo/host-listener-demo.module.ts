import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListenerDemoComponent } from './host-listener-demo/host-listener-demo.component';

@NgModule({
  declarations: [
    HostListenerDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HostListenerDemoComponent
  ]
})
export class HostListenerDemoModule { }
