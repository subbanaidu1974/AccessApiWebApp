import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  // private apiUrl = 'http://localhost:8000/api';
  private apiUrl = 'https://api.accessapis.com/api';
  private apiKey = '88b7d8065c055c33f2d7b0c8ed29a932b98849e2ed2a31b575a8b2982122f055';

  constructor(private http: HttpClient) {}

  getStateNames(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(this.apiUrl + '/state-names', { headers });
  }

  getCountiesByState(stateName: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}/counties/${encodeURIComponent(stateName)}`, { headers });
  }

  getCitiesByState(stateName: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}/cities/${encodeURIComponent(stateName)}`, { headers });
  }
}
