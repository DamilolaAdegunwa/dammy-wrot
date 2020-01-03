import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSectionComponent } from './topics-section.component';

describe('TopicsSectionComponent', () => {
  let component: TopicsSectionComponent;
  let fixture: ComponentFixture<TopicsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
