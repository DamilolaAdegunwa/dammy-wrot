import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppSectionComponent } from './get-app-section.component';

describe('GetAppSectionComponent', () => {
  let component: GetAppSectionComponent;
  let fixture: ComponentFixture<GetAppSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAppSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
