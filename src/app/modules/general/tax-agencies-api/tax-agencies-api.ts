import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from '@angular/common';
import { UsageStatsService } from '../../../services/usage-stats.service';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { GeoService } from '../../../services/geo.service';

@Component({
  selector: 'app-tax-agencies-api',
  imports: [MatIconModule,JsonPipe],
  templateUrl: './tax-agencies-api.html',
  styleUrls: ['./tax-agencies-api.scss']
})
export class TaxAgenciesApi {
  stats: any;
  apiKey: string | null = null;
  createKey: string | null = null;
  stateNames: string | null = null;
  countiesByState: string | null = null;
  citiesByState: string | null = null;

  constructor(private usageStatsService: UsageStatsService, 
    private authService: AuthService,
    private geoService: GeoService
  ) {}

  ngOnInit(): void {
  }

  getUsageStats(): void {
    this.usageStatsService.getUsageStats().subscribe({
      next: (data) => this.stats = data,
      error: (err) => console.error('Error fetching usage stats:', err)
    });
  }

  getApiKey(): void {
    this.authService.getApiKey('subbanaidu@yahoo.com', 'Hello123').subscribe({
      next: (data) => this.apiKey = data,
      error: (err) => console.error('Error fetching usage stats:', err)
    });
  }

  createApiKey(): void {
    this.authService.createKey({
      email: 'subba@gmail.com',
      password: 'Hello123',
      first_name: 'Subba',
      last_name: 'Kesi',
      phone: '3992343456'
    }).subscribe({
      next: (res) => this.createKey = res,
      error: (err) => console.error('Error creating API key:', err)
    });
  }

  getStateNames(): void {
    this.geoService.getStateNames().subscribe({
      next: (data) => this.stateNames = data,
      error: (err) => console.error('Error fetching usage stats:', err)
    });
  }

  getCountiesByState(stateName: string): void {
    this.geoService.getCountiesByState(stateName).subscribe({
      next: (data) => this.countiesByState = data,
      error: (err) => console.error('Error fetching usage stats:', err)
    });
  }

  getCitiesByState(stateName: string): void {
    this.geoService.getCitiesByState(stateName).subscribe({
      next: (data) => this.citiesByState = data,
      error: (err) => console.error('Error fetching usage stats:', err)
    });
  }


}