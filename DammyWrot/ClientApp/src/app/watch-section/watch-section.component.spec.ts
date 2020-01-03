import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSectionComponent } from './watch-section.component';

describe('WatchSectionComponent', () => {
  let component: WatchSectionComponent;
  let fixture: ComponentFixture<WatchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
