import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSearchSectionComponent } from './full-search-section.component';

describe('FullSearchSectionComponent', () => {
  let component: FullSearchSectionComponent;
  let fixture: ComponentFixture<FullSearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullSearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
