import { Component } from '@angular/core';

@Component({
  selector: 'ja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  menuOptions: Array<Object> = [{
    url: '/home',
    label: '/home'
  }, {
    url: '/architecture',
    label: 'architecture'
  }, {
    url: '/components',
    label: 'components',
    submenu: [{
      url: '/components/template-syntax',
      label: 'Template Syntax'
    }, {
      url: '/components/lifecycle-hooks',
      label: 'Lifecycle Hooks'
    }, {
      url: '/components/interaction',
      label: 'Component Interaction'
    }, {
      url: '/components/styles',
      label: 'Component Styles'
    }, {
      url: '/components/angular-elements',
      label: 'Angular Elements'
    }, {
      url: '/components/dynamic-components',
      label: 'Dynamic Components'
    }, {
      url: '/components/attribute-directives',
      label: 'Attribute Directives'
    }, {
      url: '/components/structural-directives',
      label: 'Structural Directives'
    }, {
      url: '/components/pipes',
      label: 'Pipes'
    }, {
      url: '/components/others',
      label: 'Others'
    }]
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
  }];

  ngAfterViewChecked(){
    setTimeout(() => {
      window['PR'].prettyPrint();
    })
  }
}
