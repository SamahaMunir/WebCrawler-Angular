import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-bbc-headlines',
  templateUrl: './bbc-headlines.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./bbc-headlines.component.css']
})
export class BbcHeadlinesComponent implements OnInit {
  headlines: { heading: string; description: string | null }[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHeadlines();
  }

  fetchHeadlines(): void {
    this.http.get<{ heading: string; description: string | null }[]>('/scraper').subscribe({
      next: (data) => {
        this.headlines = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch headlines. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
