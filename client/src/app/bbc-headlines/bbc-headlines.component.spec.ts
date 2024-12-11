import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcHeadlinesComponent } from './bbc-headlines.component';

describe('BbcHeadlinesComponent', () => {
  let component: BbcHeadlinesComponent;
  let fixture: ComponentFixture<BbcHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbcHeadlinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BbcHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
