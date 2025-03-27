import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-who-i-am',
  standalone: true,
  imports: [TranslatePipe, CommonModule ],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.scss'
})
export class WhoIAmComponent {
  switchlanguagedata = inject(SwitchlanguagedataService);

}
