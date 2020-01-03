import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesSectionComponent } from './memories-section.component';

describe('MemoriesSectionComponent', () => {
  let component: MemoriesSectionComponent;
  let fixture: ComponentFixture<MemoriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
