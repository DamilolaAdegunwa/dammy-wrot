import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DammyWrotAdsSectionComponent } from './dammy-wrot-ads-section.component';

describe('DammyWrotAdsSectionComponent', () => {
  let component: DammyWrotAdsSectionComponent;
  let fixture: ComponentFixture<DammyWrotAdsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DammyWrotAdsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DammyWrotAdsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
