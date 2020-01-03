import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesSectionComponent } from './cookies-section.component';

describe('CookiesSectionComponent', () => {
  let component: CookiesSectionComponent;
  let fixture: ComponentFixture<CookiesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
