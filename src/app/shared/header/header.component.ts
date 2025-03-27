import { Component, inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';
import { CommonModule } from '@angular/common';
import { PreventScrollingService } from '../../services/prevent-scrolling.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuIsClosed = true;
  name = "Gast";
  switchlanguagedata = inject(SwitchlanguagedataService);
  preventScrolling = inject(PreventScrollingService);

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
    
  constructor(private translate: TranslateService) { 
    this.checkGerman()
  };

  checkGerman() {
    let storedGerman = localStorage.getItem('german');
    let isGerman = storedGerman !== null ? JSON.parse(storedGerman) : true;
    if (isGerman) {
      this.hovers[0].isShown = false;
      this.hovers[1].isShown = true;
    } else if (!isGerman) {
      this.hovers[0].isShown = true;
      this.hovers[1].isShown = false;
    }
  }

  addHover(index: number) {
    if (!this.hovers[index].isHovered) {
      this.hovers[index].isHovered = true;
    }

  }

  removeHover(index: number) {
    if (this.hovers[index].isHovered) {
      this.hovers[index].isHovered = false;
    }
  }

  toggleVisible(index: number, index2: number) {
    if (this.hovers[index].isShown) {
      this.hovers[index].isShown = false;
      this.hovers[index2].isShown = true;
    } else {
      this.hovers[index].isShown = true;
      this.hovers[index2].isShown = true;
    };
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'de') {
      this.switchlanguagedata.german = true;
    } else if (language == 'en') { this.switchlanguagedata.german = false; }
    localStorage.setItem('german', JSON.stringify(this.switchlanguagedata.german));
    this.checkGerman()
  }

  toggleBurgerMenu() {
    this.menuIsClosed = !this.menuIsClosed;
    this.preventScrolling.overlayIsShown = !this.preventScrolling.overlayIsShown;
    console.log(this.preventScrolling.overlayIsShown);
  }
}
