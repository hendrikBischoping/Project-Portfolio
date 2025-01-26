import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {  
  hovers: {
    isHovered: boolean;
    isShown?: boolean;
  }[] = [
    {
      isHovered: false,
      isShown: false,
    },
    {
      isHovered: false,
      isShown: true,
    },
    {
      isHovered: false,
    },
  ];
  
  addHover(index: number){
    if (!this.hovers[index].isHovered) {
      this.hovers[index].isHovered = true;
  }
}

removeHover(index: number){
  if (this.hovers[index].isHovered) {
    this.hovers[index].isHovered = false;
    }
  }

  toggleVisible(index: number, index2: number){
    if (this.hovers[index].isShown) {
      this.hovers[index].isShown = false;
      this.hovers[index2].isShown = true;
    } else {this.hovers[index].isShown = true;
      this.hovers[index2].isShown = true};
  }  
}
