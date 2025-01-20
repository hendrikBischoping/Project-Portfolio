import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
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
