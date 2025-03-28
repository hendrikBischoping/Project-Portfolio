
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { PreventScrollingService } from './services/prevent-scrolling.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  preventScrolling = inject(PreventScrollingService);
  title = 'my-portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    const storedGerman = localStorage.getItem('german');
    const isGerman = storedGerman !== null ? JSON.parse(storedGerman) : true;
    this.translate.use(isGerman ? 'de' : 'en');
  };
}
