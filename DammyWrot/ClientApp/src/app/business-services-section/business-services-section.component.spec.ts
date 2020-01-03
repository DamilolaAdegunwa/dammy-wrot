import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServicesSectionComponent } from './business-services-section.component';

describe('BusinessServicesSectionComponent', () => {
  let component: BusinessServicesSectionComponent;
  let fixture: ComponentFixture<BusinessServicesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessServicesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
