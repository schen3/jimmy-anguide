import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { InteractionComponent } from './interaction/interaction.component';
import { StylesComponent } from './styles/styles.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'template-syntax',
  pathMatch: 'full'
}, {
  path: 'template-syntax',
  component: TemplateSyntaxComponent
}, {
  path: 'lifecycle-hooks',
  component: LifecycleHooksComponent
}, {
  path: 'interaction',
  component: InteractionComponent
}, {
  path: 'styles',
  component: StylesComponent
}, {
  path: 'angular-elements',
  component: AngularElementsComponent
}, {
  path: 'dynamic-components',
  component: DynamicComponentsComponent
}, {
  path: 'directives',
  component: DirectivesComponent
}, {
  path: 'pipes',
  component: PipesComponent
}, {
  path: 'others',
  component: OthersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
