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
  projectImgs: {                                  //bei Zeiten auslagern!
    class: string;
    visible: boolean;
  }[] = [
    {
      class: 'pokédex',
      visible: false,
    },
    {
      class: 'sharkie',
      visible: false,
    },
    {
      class: 'hourglass',
      visible: false,
    },
  ]

  projects: Projects[] = [
    {
      name: 'Pokédex',
      class: 'pokédex',
      isHovered: false,
      isOpened: false,
      github: 'https://github.com/hendrikBischoping/pok-dex',
      lifetest: 'https://hendrik-bischoping.developerakademie.net/project-pok%C3%A9dex/index.html',
      description: 'This is a Pokédex. The project fetches data from an API to render it into the code',
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
  
  openProjektDetails(index: number){
    console.log('Bild ',index);
    
  }
}