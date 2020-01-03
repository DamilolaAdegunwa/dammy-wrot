import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersSectionComponent } from './followers-section.component';

describe('FollowersSectionComponent', () => {
  let component: FollowersSectionComponent;
  let fixture: ComponentFixture<FollowersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
