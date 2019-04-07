import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
;
import { MenuComponent } from './menu/menu.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { QuestionComponent } from './question/question.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MenuComponent,
    FirstChildComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FirstChildComponent,
    MessageComponent
  ]
})
export class CommonsModule { }
