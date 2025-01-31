import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-who-i-am',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.scss'
})
export class WhoIAmComponent {

}
