import { Component } from '@angular/core';

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

  showImage(index: number){
    if (this.projectImgs[index].visible) {
      this.projectImgs[index].visible = false;
    } else {
      this.projectImgs[index].visible = true;
    }
  }
}
