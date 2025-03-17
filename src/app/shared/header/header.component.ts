import { Component, inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) { };
  menuIsClosed = true;
  name = "Gast";
  switchlanguagedata = inject(SwitchlanguagedataService);

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
    } else { this.switchlanguagedata.german = false; }
  }

  toggleBurgerMenu() {
    this.menuIsClosed = !this.menuIsClosed;
    console.log(this.menuIsClosed);
  }
}
