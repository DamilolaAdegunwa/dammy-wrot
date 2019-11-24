import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterAdsSectionComponent } from './twitter-ads-section.component';

describe('TwitterAdsSectionComponent', () => {
  let component: TwitterAdsSectionComponent;
  let fixture: ComponentFixture<TwitterAdsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterAdsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterAdsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
