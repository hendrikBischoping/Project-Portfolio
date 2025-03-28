import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Projects } from './../../interfaces/projects.interface';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {
  constructor(private translate: TranslateService) { };
  switchlanguagedata = inject(SwitchlanguagedataService);

  /**
   * This array contains all data that gets rendered into the project card overlay when opened
   */
  projects: Projects[] = [
    {
      name: 'Pokédex',
      class: 'pokédex',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/pok-dex',
      lifetest: 'https://hendrik-bischoping.de/project-pok%c3%a9dex/',
      descriptionDe: 'Dies ist ein Pokédex. Das Projekt ruft Daten von einer API ab und rendert sie im Code!',
      descriptionEn: 'This is a Pokédex. The project fetches data from an API to render it into the code!',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'Sharkie',
      class: 'sharkie',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/sharky-game',
      lifetest: 'https://hendrik-bischoping.de/project%20sharky-game/index.html',
      descriptionDe: 'Dies ist ein "Swim-and-Shoot"-Spiel, das auf objektorientierter Programmierung basiert.',
      descriptionEn: 'This is a "swim-and-shoot"-game based on object-orinted coding.',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'JOIN',
      class: 'join',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/Join',
      lifetest: '',
      descriptionDe: 'JOIN ist ein einfacher Kanban-Board-Klon, der in einer Gruppenarbeit mit <a class="colleague" target="_blank" href="https://sascha-toepfer-dev.de/">Sascha Töpfer</a> und Andreas Welker erstellt wurde.',
      descriptionEn: 'JOIN is a simple Kanban-Board clone that was created in a group work with <a class="colleague" target="_blank" href="https://sascha-toepfer-dev.de/">Sascha Töpfer</a> and Andreas Welker',
      technologies: ['HTML', 'Angular', 'TypeScript', 'Firebase'],

    },
  ]

  hovers = [
    {hovered: false},
    {hovered: false},
    {hovered: false},
  ] 

  /**
   * toggles the visibility of the example image of a project when project title is hovered (before opening)
   * @param index - individual index to always toggle the right image depending on title
   */
  showImage(index: number){
    if (this.projects[index].isHovered) {
      this.projects[index].isHovered = false;
    } else {
      this.projects[index].isHovered = true;
    }
  }
  
  /**
   * opend overlay with project information after clicking on project title
   * @param index individual index to always open the right project depending on title
   */
  toggleProjektDetails(index: number){
    if (this.projects[index].isOpened) {
      this.projects[index].isOpened = false;
    } else {
      this.projects[index].isOpened = true;
    }
  }

  /**
   * checks if an element is hovered, to change its style
   * @param i - individual index to always toggle the right element 
   */
  addHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
  
  /**
   * checks if an element is no longer hovered, to change its style to default
   * @param i - individual index to always toggle the right element 
   */
  removeHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }

  /**
   * renders the next project onformation into the overlay depending on index of 'projects'-array
   * @param index - individual index to always render the next project depending on the opened one
   */
  nextProject(index: number){
    let flippedIndex = index + 1;
    if (flippedIndex >= this.projects.length) {
      flippedIndex = 0;
    }
    this.toggleProjektDetails(index)
    this.toggleProjektDetails(flippedIndex)
  }

  /**
   * event bubbling to prevent clicking elements underneath an overlay
   * @param event - any event such as onclick or scroll
   */
  stopBubbling(event: any) {
    event.stopPropagation();
  }
}
