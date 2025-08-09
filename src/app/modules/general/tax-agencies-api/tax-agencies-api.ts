import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tax-agencies-api',
  imports: [MatIconModule,NgIf],
  templateUrl: './tax-agencies-api.html',
  styleUrls: ['./tax-agencies-api.scss']
})
export class TaxAgenciesApi {
  apidata: any;
  constructor(private sanitizer: DomSanitizer) { }
  

  ngOnInit(): void {

  }

}