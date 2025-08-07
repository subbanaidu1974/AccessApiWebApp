import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PLATFORM_ID } from '@angular/core';

import { Quote } from './quote';

import { SeoService } from '../../../core/services/seo/seo.service';
import { Feature } from './feature';
import { Dependency } from './dependency';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  dependencies: Dependency;
  features: Feature;
  quote: Quote;
  id: number;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    const content = 'About content with meta';
    this.seoService.setMetaDescription(content);

    this.id = 0;
    this.quote = new Quote();
    this.dependencies = {
      frontend: [
        { name: 'Angular 20.0.6' },
        { name: 'Angular CLI 20.0.5' },
        { name: 'Angular SSR 20.0.5' },
        { name: 'Bootstrap 5.3.7' },
        { name: 'Font Awesome 7.0.0' },
      ],
      backend: [
        { name: 'Node.js 22.14.0' },
        { name: 'Express 4.21.2' },
        { name: 'pg-promise 11.12.1' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.accessapis.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.accessapis.com/en/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.accessapis.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'Components',
          englishTutorial: '',
          frenchTutorial: 'https://www.accessapis.com/tutorials/components-avec-angular',
        },
        {
          name: 'Services',
          englishTutorial: '',
          frenchTutorial: 'https://www.accessapis.com/tutorials/services-avec-angular',
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

  ngOnInit(): void {
    this.loadQuote();

    const content =
      'Cette application a été développée avec Angular version 20.0.4 et bootstrap 5.3.7' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : About Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


  loadQuote() {
    const quotes = [
      {
        name: 'Lawrence of Arabia',
        title: 'There is nothing in the desert and no man needs nothing',
        link: 'https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)'
      },
      {
        name: 'Alien Prometheus',
        title: 'Big things have small beginnings',
        link: 'https://en.wikipedia.org/wiki/Prometheus_(2012_film)'
      },
      {
        name: 'Blade Runner',
        title: 'All those moments will be lost in time... like tears in rain... Time to die.',
        link: 'https://en.wikipedia.org/wiki/Blade_Runner'
      },
    ];
    const index = quotes.length;
    let id = this.id;
    while (this.id === id) {
      id = Math.floor(Math.random() * index);
    }
    this.id = id;
    this.quote = quotes[id];
  }

}