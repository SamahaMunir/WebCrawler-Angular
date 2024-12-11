import { Component } from '@angular/core';
import { BbcHeadlinesComponent } from './bbc-headlines/bbc-headlines.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BbcHeadlinesComponent], // Import the standalone component
  template: `
    <app-bbc-headlines></app-bbc-headlines>
    <!-- Using the correct selector -->
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // AppComponent can serve as a container to organize your UI
  title: any;
}
