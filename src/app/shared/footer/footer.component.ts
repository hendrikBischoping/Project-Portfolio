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
  logoHovered: boolean = false;
  
  addHover(){
    if (!this.logoHovered) {
    this.logoHovered = true;
  }
}

removeHover(){
    if (this.logoHovered) {
      this.logoHovered = false;
    }
  }
}
