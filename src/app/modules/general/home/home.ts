import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  itemsExamples = [    
    {
      icon: "fa-brands fa-bootstrap",
      name: "Geo API",
      description: "Geolocation and maps",
      link: '/bootstrap'
    },
    {
      icon: "fa-sharp fa-solid fa-newspaper",
      name: "News API",
      description: "News articles",
      link: '/news'
    },
    {
      icon: "fa-solid fa-chart-simple",
      name: "Weather API",
      description: "Weather reports",
      link: '/boxoffice'
    },
    {
      icon: "fa-solid fa-blender-phone",
      name: "Open API",
      description: "Open api services",
      link: '/services'
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "Tax Agencies API",
      description: "Tax agencies info",
      link: '/components'
    },
    {
      icon: "fa-solid fa-network-wired",
      name: "Property Tax API",
      description: "Property tax data",
      link: '/httpclient'
    },
  ]

  constructor() {

    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';
  }
}
