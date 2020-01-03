import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedTweetSectionComponent } from './posted-tweet-section.component';

describe('PostedTweetSectionComponent', () => {
  let component: PostedTweetSectionComponent;
  let fixture: ComponentFixture<PostedTweetSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedTweetSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedTweetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
