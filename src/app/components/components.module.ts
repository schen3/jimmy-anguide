import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';
import { StyleSelectorsComponent } from './style-selectors/style-selectors.component';
import { CommonsModule } from '../commons/commons.module';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { StylesComponent } from './styles/styles.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { InteractionComponent } from './interaction/interaction.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    StyleSelectorsComponent,
    TemplateSyntaxComponent,
    StylesComponent,
    LifecycleHooksComponent,
    InteractionComponent,
    AngularElementsComponent,
    DynamicComponentsComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
