import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',  // This means it's globally available in the app
})
export class BbcCrawlerService {
  private apiUrl = 'http://localhost:3001/api/scraper';  // URL of your Express backend

  constructor() {}

  getHeadlines() {
    return axios.get(this.apiUrl);  // Request the data from the API
  }
}
