import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnClickActionDirective } from './on-click-action.directive';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';

@NgModule({
  declarations: [
    OnClickActionDirective,
    AttributeDirectiveDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttributeDirectiveDemoComponent
  ]
})
export class AttributeDirectiveDemoModule { }
