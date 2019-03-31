import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
;
import { MenuComponent } from './menu/menu.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    MenuComponent,
    FirstChildComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FirstChildComponent,
    QuestionComponent
  ]
})
export class CommonsModule { }
