import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from "./main-content/above-the-fold/above-the-fold.component";
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
