import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksSectionComponent } from './bookmarks-section.component';

describe('BookmarksSectionComponent', () => {
  let component: BookmarksSectionComponent;
  let fixture: ComponentFixture<BookmarksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
