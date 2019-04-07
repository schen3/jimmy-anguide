import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveDemoModule } from './attribute-directive-demo/attribute-directive-demo.module';
import { HostListenerDemoModule } from './host-listener-demo/host-listener-demo.module';
import { StructuralDirectiveDemoModule } from './structural-directive-demo/structural-directive-demo.module';
import { PipeDemoModule } from './pipe-demo/pipe-demo.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HostListenerDemoModule,
    AttributeDirectiveDemoModule,
    StructuralDirectiveDemoModule,
    PipeDemoModule
  ]
})
export class DemosModule { }
