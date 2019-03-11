import { Component } from '@angular/core';

@Component({
  selector: 'anguide-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-guide';
  menuOptions: Array<Object> = [{
    url: '/architecture',
    label: 'architecture'
  }, {
    url: '/components',
    label: 'components'
  }, {
    url: '/forms',
    label: 'forms'
  }, {
    url: '/reactive',
    label: 'reactive'
  }, {
    url: '/bootstrapping',
    label: 'bootstrapping'
  }, {
    url: '/modules',
    label: 'modules'
  }, {
    url: '/dependency-injection',
    label: 'dependency-injection'
  }, {
    url: '/http-client',
    label: 'http-client'
  }, {
    url: '/routing-navigation',
    label: 'routing-navigation'
  }, {
    url: '/animations',
    label: 'animations'
  }]
}
