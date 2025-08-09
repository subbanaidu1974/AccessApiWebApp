import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../core/services/seo/seo.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-apis',
   imports: [CommonModule],
  templateUrl: './apis.html',
  styleUrl: './apis.css'
})
export class Apis {
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
      link: '/tax-agencies-api'
    },
    {
      icon: "fa-solid fa-network-wired",
      name: "Property Tax API",
      description: "Property tax data",
      link: '/httpclient'
    },
  ]

  constructor(private router: Router) {

    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    // this.seoService.setMetaDescription(content);
    // this.seoService.setMetaTitle(title);

  }

  onNavigate(item: any) {
    this.router.navigate([item.link]);
  }

}