/**
 * The atf-component represents the content of the project landing page
 */
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ TranslatePipe, HeaderComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  hovers = [
    {hovered: false},
    {hovered: false},
    {hovered: false},
  ] 
  fullName = ['H', 'e', 'n', 'd', 'r', 'i', 'k ', 'B', 'i', 's', 'c', 'h', 'o', 'p', 'i', 'n', 'g', ]

  /**
   * toggles the hovered-boolean to true to add style on hovered elements
   * @param i - contains an index, to always toggle the correct element
   */
  addHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
  
  /**
   * toggles the hovered-boolean to false to remove style on hovered elements
   * @param i - contains an index, to always toggle the correct element
   */
  removeHover(i: number) {
    if (this.hovers[i].hovered) {
      this.hovers[i].hovered = false
    } else {this.hovers[i].hovered = true}
  }
}
