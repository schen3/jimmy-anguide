import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';

@NgModule({
  declarations: [
    StructuralDirectiveDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveDemoComponent
  ]
})
export class StructuralDirectiveDemoModule { }
