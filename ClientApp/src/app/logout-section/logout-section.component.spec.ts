import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutSectionComponent } from './logout-section.component';

describe('LogoutSectionComponent', () => {
  let component: LogoutSectionComponent;
  let fixture: ComponentFixture<LogoutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
