import { Component, inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private translate: TranslateService) { };
  switchlanguagedata = inject(SwitchlanguagedataService);
  logoHovered: boolean = false;

  /**
   * toggles status of a boolean when the logo is hovered to change its style
   */
  addHover() {
    if (!this.logoHovered) {
      this.logoHovered = true;
    }
  }

  /**
   * toggles status of a boolean when the logo is no longer hovered to change its style to default
   */
  removeHover() {
    if (this.logoHovered) {
      this.logoHovered = false;
    }
  }
}
