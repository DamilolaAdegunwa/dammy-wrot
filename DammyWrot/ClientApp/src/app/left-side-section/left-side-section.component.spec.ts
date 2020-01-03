import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideSectionComponent } from './left-side-section.component';

describe('LeftSideSectionComponent', () => {
  let component: LeftSideSectionComponent;
  let fixture: ComponentFixture<LeftSideSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
