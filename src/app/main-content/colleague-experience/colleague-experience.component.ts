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

  commentaries: Commentaries[] = [
    {
      commentary: "Imagine this would be a very laudatory comment",
      name: "Mr. X",
      title: "friendly dude",
      isShown: false,
    },
    {
      commentary: "This could be another very laudatory comment",
      name: "You know who",
      title: "professional human",
      isShown: true,
    },
    {
      commentary: "This is where your very laudatory comment about me could be",
      name: "Hendrik",
      title: "portfolio owner",
      isShown: false,
    },
  ]
}
