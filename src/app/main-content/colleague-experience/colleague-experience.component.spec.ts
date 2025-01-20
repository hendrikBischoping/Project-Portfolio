import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueExperienceComponent } from './colleague-experience.component';

describe('ColleagueExperienceComponent', () => {
  let component: ColleagueExperienceComponent;
  let fixture: ComponentFixture<ColleagueExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleagueExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColleagueExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
