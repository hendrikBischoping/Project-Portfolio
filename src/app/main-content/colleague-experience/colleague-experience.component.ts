import { Component } from '@angular/core';
import { Commentaries } from '../../interfaces/commentaries.interface';

@Component({
  selector: 'app-colleague-experience',
  standalone: true,
  imports: [],
  templateUrl: './colleague-experience.component.html',
  styleUrl: './colleague-experience.component.scss'
})
export class ColleagueExperienceComponent {
  arrowHover = false;
  rightHover = false;

  arrows: {
    neutral: string;
    hovered: string;
    isHovered: boolean;
  }[] = [
    {
      neutral: 'left',
      hovered: 'left-hover',
      isHovered: false,
    },
    {
      neutral: 'right',
      hovered: 'right-hover',
      isHovered: false,
    },
  ]

  commentaries: Commentaries[] = [
    {
      commentary: "Imagine this would be a very laudatory comment + Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia maiores temporibus consectetur alias sed accusamus corrupti ullam, odit tempora.",
      name: "Mr. X",
      title: "friendly dude",
      isShown: true,
    },
    {
      commentary: "This could be another very laudatory comment + Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia maiores temporibus consectetur alias sed accusamus corrupti ullam, odit tempora.",
      name: "You know who",
      title: "professional human",
      isShown: false,
    },
    {
      commentary: "This is where your very laudatory comment about me could be + Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia maiores temporibus consectetur alias sed accusamus corrupti ullam, odit tempora.",
      name: "Hendrik",
      title: "portfolio owner",
      isShown: false,
    },
  ]

  addHover(index: number){
    if (!this.arrows[index].isHovered) {
    this.arrows[index].isHovered = true;
    console.log( this.arrows[index].isHovered);
  }
}

removeHover(index: number){
    if (this.arrows[index].isHovered) {
      this.arrows[index].isHovered = false;
      console.log( this.arrows[index].isHovered);
    }
  }
}

