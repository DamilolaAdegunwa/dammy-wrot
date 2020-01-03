import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSectionComponent } from './messages-section.component';

describe('MessagesSectionComponent', () => {
  let component: MessagesSectionComponent;
  let fixture: ComponentFixture<MessagesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
