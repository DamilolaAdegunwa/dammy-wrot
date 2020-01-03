import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideSectionComponent } from './right-side-section.component';

describe('RightSideSectionComponent', () => {
  let component: RightSideSectionComponent;
  let fixture: ComponentFixture<RightSideSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
