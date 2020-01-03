import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSectionComponent } from './analytics-section.component';

describe('AnalyticsSectionComponent', () => {
  let component: AnalyticsSectionComponent;
  let fixture: ComponentFixture<AnalyticsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
