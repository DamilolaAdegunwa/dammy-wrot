import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterSectionComponent } from './help-center-section.component';

describe('HelpCenterSectionComponent', () => {
  let component: HelpCenterSectionComponent;
  let fixture: ComponentFixture<HelpCenterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
