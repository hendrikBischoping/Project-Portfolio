import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy-en',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy-en.component.html',
  styleUrl: './privacy-policy-en.component.scss'
})
export class PrivacyPolicyEnComponent {

}
