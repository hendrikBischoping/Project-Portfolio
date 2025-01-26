import { Component } from '@angular/core';
// import { Hover } from "./../../interfaces/hover.interface";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // arrows: Hover[] = [
  //   {
  //     neutral: 'left',
  //     hovered: 'left-hover',
  //     isHovered: false,
  //   },
  //   {
  //     neutral: 'right',
  //     hovered: 'right-hover',
  //     isHovered: false,
  //   },
  // ]
  logoHovered: boolean = false;
  
  addHover(){
    if (!this.logoHovered) {
    this.logoHovered = true;
    console.log( this.logoHovered);
  }
}

removeHover(){
    if (this.logoHovered) {
      this.logoHovered = false;
      console.log( this.logoHovered);
    }
  }
}
