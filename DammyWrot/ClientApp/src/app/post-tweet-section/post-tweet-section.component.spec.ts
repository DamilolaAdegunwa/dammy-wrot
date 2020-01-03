import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTweetSectionComponent } from './post-tweet-section.component';

describe('PostTweetSectionComponent', () => {
  let component: PostTweetSectionComponent;
  let fixture: ComponentFixture<PostTweetSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTweetSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTweetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
