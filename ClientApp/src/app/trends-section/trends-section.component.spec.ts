import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsSectionComponent } from './trends-section.component';

describe('TrendsSectionComponent', () => {
  let component: TrendsSectionComponent;
  let fixture: ComponentFixture<TrendsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
