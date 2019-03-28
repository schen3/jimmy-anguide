import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
;
import { MenuComponent } from './menu/menu.component';
import { FirstChildComponent } from './first-child/first-child.component';

@NgModule({
  declarations: [
    MenuComponent,
    FirstChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FirstChildComponent
  ]
})
export class CommonsModule { }
