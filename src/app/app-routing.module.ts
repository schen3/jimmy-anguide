import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'architecture',
  loadChildren: './architecture/architecture.module#ArchitectureModule'
}, {
  path: 'components',
  loadChildren: './components/components.module#ComponentsModule'
}, {
  path: 'animations',
  loadChildren: './animations/animations.module#AnimationsModule'
}, {
  path: 'bootstrapping',
  loadChildren: './bootstrapping/bootstrapping.module#BootstrappingModule'
}, {
  path: 'dependency-injection',
  loadChildren: './dependency-injection/dependency-injection.module#DependencyInjectionModule'
}, {
  path: 'forms',
  loadChildren: './forms/forms.module#FormsModule'
}, {
  path: 'http-client',
  loadChildren: './http-client/http-client.module#HttpClientModule'
}, {
  path: 'modules',
  loadChildren: './modules/modules.module#ModulesModule'
}, {
  path: 'reactive',
  loadChildren: './reactive/reactive.module#ReactiveModule'
}, {
  path: 'routing-navigation',
  loadChildren: './routing-navigation/routing-navigation.module#RoutingNavigationModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
