import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsSectionComponent } from './moments-section.component';

describe('MomentsSectionComponent', () => {
  let component: MomentsSectionComponent;
  let fixture: ComponentFixture<MomentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
