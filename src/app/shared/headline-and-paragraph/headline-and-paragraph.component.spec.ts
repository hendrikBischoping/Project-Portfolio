import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineAndParagraphComponent } from './headline-and-paragraph.component';

describe('HeadlineAndParagraphComponent', () => {
  let component: HeadlineAndParagraphComponent;
  let fixture: ComponentFixture<HeadlineAndParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlineAndParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadlineAndParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
