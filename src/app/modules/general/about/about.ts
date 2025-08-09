import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PLATFORM_ID } from '@angular/core';

import { Quote } from './quote';
import { Feature } from './feature';
import { Dependency } from './dependency';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  id: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {

    const content = 'About content with meta';
    
    this.id = 0;
    
  }

  ngOnInit(): void {
   
    const content =
      'Cette application a été développée avec Angular version 20.0.4 et bootstrap 5.3.7' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : About Page';

  }
}