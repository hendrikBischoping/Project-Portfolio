import { Component  } from '@angular/core';
import { Projects } from './../../interfaces/projects.interface';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {
  projects: Projects[] = [
    {
      name: 'Pokédex',
      class: 'pokédex',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/pok-dex',
      lifetest: 'https://hendrik-bischoping.developerakademie.net/project-pok%C3%A9dex/index.html',
      description: 'This is a Pokédex. The project fetches data from an API to render it into the code!',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'Sharkie',
      class: 'sharkie',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/sharky-game',
      lifetest: 'https://hendrik-bischoping.developerakademie.net/project%20sharky-game/index.html',
      description: 'This is a "swim-and-shoot"-game based on object-orinted coding.',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'JOIN',
      class: 'join',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/Join',
      lifetest: '',
      description: 'JOIN is a simple Kanban-Board clone that was created in a group work with <a class="colleague" target="_blank" href="https://sascha-toepfer-dev.de/">Sascha Töpfer</a> and Andreas Welker',
      technologies: ['HTML', 'Angular', 'TypeScript', 'Firebase'],

    },
  ]

  hovers = [
    {hovered: false},
    {hovered: false},
    {hovered: false},
  ] 

  showImage(index: number){
    if (this.projects[index].isHovered) {
      this.projects[index].isHovered = false;
    } else {
      this.projects[index].isHovered = true;
    }
  }
  
  toggleProjektDetails(index: number){
    if (this.projects[index].isOpened) {
      this.projects[index].isOpened = false;
    } else {
      this.projects[index].isOpened = true;
    }
  }

  addHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
  
  removeHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }

  nextProject(index: number){
    let flippedIndex = index + 1;
    if (flippedIndex >= this.projects.length) {
      flippedIndex = 0;
    }
    this.toggleProjektDetails(index)
    this.toggleProjektDetails(flippedIndex)
  }
  stopBubbling(event: any) {
    event.stopPropagation();
  }
}
