import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SplitByPipe } from './split-by.pipe';

@NgModule({
  declarations: [
    SplitByPipe,
    PipeDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeDemoComponent
  ]
})
export class PipeDemoModule { }
