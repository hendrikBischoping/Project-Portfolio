import { Component, inject } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { ColleagueExperienceComponent } from './colleague-experience/colleague-experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    WhoIAmComponent,
    TechnologiesComponent,
    PortfolioProjectsComponent,
    ColleagueExperienceComponent,
    ContactMeComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}