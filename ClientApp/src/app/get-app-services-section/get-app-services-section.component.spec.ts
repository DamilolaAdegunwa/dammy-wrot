import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppServicesSectionComponent } from './get-app-services-section.component';

describe('GetAppServicesSectionComponent', () => {
  let component: GetAppServicesSectionComponent;
  let fixture: ComponentFixture<GetAppServicesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAppServicesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAppServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
