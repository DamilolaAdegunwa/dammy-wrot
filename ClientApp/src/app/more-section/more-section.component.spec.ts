import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSectionComponent } from './more-section.component';

describe('MoreSectionComponent', () => {
  let component: MoreSectionComponent;
  let fixture: ComponentFixture<MoreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
