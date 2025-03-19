
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
import { PreventScrollingService } from './services/prevent-scrolling.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  preventScrolling = inject(PreventScrollingService);
  title = 'my-portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('de');
};
}
