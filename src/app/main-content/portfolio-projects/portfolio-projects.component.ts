import { Component } from '@angular/core';
import { Projects } from './../../interfaces/projects.interface';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
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
      description: 'This is a Pokédex. The project fetches data from an API to render it into the code!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores recusandae sequi numquam molestiae iste. Deserunt aspernatur odio incidunt natus maxime!',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'Sharkie',
      class: 'sharkie',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/sharky-game',
      lifetest: 'https://hendrik-bischoping.developerakademie.net/project%20sharky-game/index.html',
      description: 'This is a "swim-and-shoot"-game based on object-orinted coding.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores recusandae sequi numquam molestiae iste. Deserunt aspernatur odio incidunt natus maxime!',
      technologies: ['HTML', 'CSS', 'JavaScript'],

    },
    {
      name: 'Next Project',
      class: 'hourglass',
      isHovered: false,
      isOpened: false,
      github: '',
      lifetest: '',
      description: 'My next project will apear soon!',
      technologies: ['not finished jet'],

    },
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
      console.log(index+1+' is opened');
    }
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
