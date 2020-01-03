import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSectionComponent } from './explore-section.component';

describe('ExploreSectionComponent', () => {
  let component: ExploreSectionComponent;
  let fixture: ComponentFixture<ExploreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
