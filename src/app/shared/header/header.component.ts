import { Component, inject } from '@angular/core';
import { TranslatePipe} from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {  
  constructor(private translate: TranslateService) {};

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
  
  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'de') {
      this.switchlanguagedata.german = true;
      console.log('true');
      
    } else {this.switchlanguagedata.german = false;
      console.log('false');}
  }
}
