import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {  
  name = "Gast"

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
      //this.switchLanguage();
    } else {this.hovers[index].isShown = true;
      this.hovers[index2].isShown = true;
      //this.switchLanguage();
    };
  }  
}
