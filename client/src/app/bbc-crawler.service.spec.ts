import { TestBed } from '@angular/core/testing';

import { BbcCrawlerService } from './bbc-crawler.service';

describe('BbcCrawlerService', () => {
  let service: BbcCrawlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcCrawlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
