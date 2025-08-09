import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsageStatsService {
  // private apiUrl = 'http://localhost:8000/api/usage-stats';
  private apiUrl = 'https://api.accessapis.com/api/usage-stats';
  private apiKey = '88b7d8065c055c33f2d7b0c8ed29a932b98849e2ed2a31b575a8b2982122f055';

  constructor(private http: HttpClient) {}

  getUsageStats(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
