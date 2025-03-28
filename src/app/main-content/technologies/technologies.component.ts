import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  constructor(private translate: TranslateService) { };
  switchlanguagedata = inject(SwitchlanguagedataService);

  /**
   * contains the names of all technologies udes in several projects
   */
  technologies: {
    name: string; // needs to fit the exact name of image (png)!
  }[] = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Material Design',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Firebase',
    },
    {
      name: 'Git',
    },
    {
      name: 'Rest-Api',
    },
    {
      name: 'Scrum',
    },
    {
      name: 'Growth Mindset',
    },
  ]
}
