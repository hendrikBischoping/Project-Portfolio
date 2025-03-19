import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ TranslatePipe],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  hovers = [
    {hovered: false},
    {hovered: false},
    {hovered: false},
  ] 
  
  addHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
  
  removeHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
}
