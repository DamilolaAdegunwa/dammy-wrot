import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdChoicesSectionComponent } from './ad-choices-section.component';

describe('AdChoicesSectionComponent', () => {
  let component: AdChoicesSectionComponent;
  let fixture: ComponentFixture<AdChoicesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdChoicesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdChoicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
