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

  /**
   * contains several boolans, that get toggled if depending elements are hoveren to change the style
   */
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

  /**
   * gets value of a translation-boolean that is saved in local storage 
   * toggles visibility / style ot 'toggle-language-button' 
   * (saves changes in local storage)
   */
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

  /**
   * toggles status of a boolean when the logo is hovered to change its style
   */
  addHover(index: number) {
    if (!this.hovers[index].isHovered) {
      this.hovers[index].isHovered = true;
    }
  }

  /**
   * toggles status of a boolean when the logo is no longer hovered to change its style to default
   */
  removeHover(index: number) {
    if (this.hovers[index].isHovered) {
      this.hovers[index].isHovered = false;
    }
  }

  /**
   * toggles visibitily of two elements (buttons)
   * by toggling one element replaces the other one
   * @param index - index of the first element
   * @param index2 - index of the second element
   */
  toggleVisible(index: number, index2: number) {
    if (this.hovers[index].isShown) {
      this.hovers[index].isShown = false;
      this.hovers[index2].isShown = true;
    } else {
      this.hovers[index].isShown = true;
      this.hovers[index2].isShown = true;
    };
  }

  /**
   * sets the value of the used language depending on local storage / default
   * sets the value of 'this.switchlanguagedata'-boolean and saves the value into local storage
   * @param language - string that sets the value of the used language ('de' or 'en')
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'de') {
      this.switchlanguagedata.german = true;
    } else if (language == 'en') { this.switchlanguagedata.german = false; }
    localStorage.setItem('german', JSON.stringify(this.switchlanguagedata.german));
    this.checkGerman()
  }

  /**
   * toggles visibility of the burger menu by tapping on burger menu icon
   */
  toggleBurgerMenu() {
    this.menuIsClosed = !this.menuIsClosed;
    this.preventScrolling.overlayIsShown = !this.preventScrolling.overlayIsShown;
  }
}
