import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-who-i-am',
  standalone: true,
  imports: [TranslatePipe ],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.scss'
})
export class WhoIAmComponent {

}
