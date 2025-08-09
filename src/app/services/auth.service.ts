import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://accessapis.com/api/get-api-key';
  // private baseUrl = 'http://localhost:8000/get-api-key';

  constructor(private http: HttpClient) {}

  getApiKey(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json'
    });

    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    // POST with empty body, query params
    return this.http.post<any>(this.apiUrl, {}, { headers, params });
  }

  createKey(payload: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, payload, { headers });
  }
}
