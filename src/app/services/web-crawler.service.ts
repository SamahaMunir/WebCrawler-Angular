import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebCrawlerService {
  private apiUrl = '/scraper'; // Relative path handled by proxy

  constructor(private http: HttpClient) {}

  // Fetch data from the backend
  getScrapedData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
