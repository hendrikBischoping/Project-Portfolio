import { Component } from '@angular/core';
import { Commentaries } from '../../interfaces/commentaries.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colleague-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleague-experience.component.html',
  styleUrl: './colleague-experience.component.scss'
})
export class ColleagueExperienceComponent {
  slideLeft = false;
  slideRight = true;

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
      commentary: "Hendrik ist ein äußerst freundlicher und angenehmer Team-Partner, der sich durch seine Fleißbereitschaft und große Wissbegierde auszeichnet. Durch seine Liebe zum Detail und die hohe Genauigkeit in seiner Arbeit ist er ein unschätzbares Mitglied für jedes Team. Zudem ist immer auf ihn Verlass. Es war eine super Zusammenarbeit mit ihm",
      name: "Marcel Steffen",
      title: "Projektpartner (DA Bubble)",
      goesLeft: false,
      goesRight: true,
      isFarRight: true,
      isFarLeft: false,
      isLeft: false,
      isShown: false,
      isRight: false,
    },
    {
      commentary: "Ich hatte das Vergnügen, mit Hendrik in einem Gruppenprojekt zusammenzuarbeiten, und seine Verlässlichkeit und sein Engagement haben unser Team enorm bereichert. Er arbeitet äußerst strukturiert und effizient und hat einen sehr großen Teil zum Erfolg des Projektes beigetragen. Besonders beeindruckend war seine Eigeninitiative – er hat sich auch um weniger spannende Aufgaben gekümmert, damit unser Team reibungslos Arbeiten konnte. Ich würde jederzeit wieder mit ihm zusammenarbeiten!",
      name: "Sascha Töpfer",
      title: "Projektpartner (JOIN)",
      goesLeft: false,
      goesRight: true,
      isFarLeft: false,
      isLeft: true,
      isShown: false,
      isRight: false,
      isFarRight: false,
    },
    {
      commentary: "An excellent leader who is always ready to help his colleagues.",
      name: "Mariia Ivanova",
      title: "Projektpartner (Kochwelt)",
      goesLeft: false,
      goesRight: true,
      isFarLeft: false,
      isLeft: false,
      isShown: true,
      isRight: false,
      isFarRight: false,
    },
    {
      commentary: "Durch die Zusammenarbeit mit Hendrik am Projekt hat man sofort bemerkt, dass er dafür brennt und großes Interesse zeigt, damit es mit dem richtigen Inhalt und zur richtigen Deadline  durchgeführt werden kann. Hendrik bot immer wieder seine Unterstützung an und stand für eventuelle Fragen zur Verfügung",
      name: "Andreas Welker",
      title: "Projektpartner (JOIN)",
      goesLeft: false,
      goesRight: true,
      isFarLeft: false,
      isLeft: false,
      isShown: false,
      isRight: true,
      isFarRight: false,
    }
  ];

  addHover(index: number) {
    if (!this.arrows[index].isHovered) {
      this.arrows[index].isHovered = true;
    }
  }

  removeHover(index: number) {
    if (this.arrows[index].isHovered) {
      this.arrows[index].isHovered = false;
    }
  }

  slideToRight() {
    this.slideRight = true;
    for (let i = 0; i < this.commentaries.length; i++) {
      i + 1;
      this.farRightToFarLeft(i);
      this.rightToFarRight(i);
      this.midToRight(i);
      this.leftToMid(i);
      this.farLeftToLeft(i);
    }

    setTimeout(() => {
      this.slideRight = true;
    }, 600);
  }

  farLeftToLeft(i: number) {
    if (this.commentaries[i].isFarLeft && this.slideRight) {
      this.commentaries[i].goesLeft = false;
      this.commentaries[i].goesRight = true;
      this.commentaries[i].isFarLeft = false;
      this.commentaries[i].isLeft = true;
    }
  }

  leftToMid(i: number) {
    if (this.commentaries[i].isLeft && this.slideRight) {
      this.commentaries[i].goesLeft = false;
      this.commentaries[i].goesRight = true;
      this.commentaries[i].isLeft = false;
      this.commentaries[i].isShown = true;
    }
  }

  midToRight(i: number) {
    if (this.commentaries[i].isShown && this.slideRight) {
      this.commentaries[i].goesLeft = false;
      this.commentaries[i].goesRight = true;
      this.commentaries[i].isShown = false;
      this.commentaries[i].isRight = true;
    }
  }

  rightToFarRight(i: number) {
    if (this.commentaries[i].isRight && this.slideRight) {
      this.commentaries[i].goesLeft = false;
      this.commentaries[i].goesRight = true;
      this.commentaries[i].isRight = false;
      this.commentaries[i].isFarRight = true;
    }
  }

  farRightToFarLeft(i: number) {
    if (this.commentaries[i].isFarRight && this.slideRight) {
      this.commentaries[i].goesLeft = false;
      this.commentaries[i].goesRight = true;
      this.commentaries[i].isFarRight = false;
      this.commentaries[i].isFarLeft = true;
    }
  }

  slideToLeft() {
    this.slideLeft = true;
    for (let i = 0; i < this.commentaries.length; i++) {
      this.leftToFarLeft(i);
      this.midToLeft(i);
      this.rightToMid(i);
      this.farRightToRight(i);
      this.farLeftToFarRight(i);
    }
    setTimeout(() => {
      this.slideLeft = true;
    }, 600);
  }

  leftToFarLeft(i: number) {
    if (this.commentaries[i].isLeft && this.slideLeft) {
      this.commentaries[i].goesRight = false;
      this.commentaries[i].goesLeft = true;
      this.commentaries[i].isLeft = false;
      this.commentaries[i].isFarLeft = true;
    }
  }

  midToLeft(i: number) {
    if (this.commentaries[i].isShown && this.slideLeft) {
      this.commentaries[i].goesRight = false;
      this.commentaries[i].goesLeft = true;
      this.commentaries[i].isShown = false;
      this.commentaries[i].isLeft = true;
    }
  }

  rightToMid(i: number) {
    if (this.commentaries[i].isRight && this.slideLeft) {
      this.commentaries[i].goesRight = false;
      this.commentaries[i].goesLeft = true;
      this.commentaries[i].isRight = false;
      this.commentaries[i].isShown = true;
    }
  }

  farRightToRight(i: number) {
    if (this.commentaries[i].isFarRight && this.slideLeft) {
      this.commentaries[i].goesRight = false;
      this.commentaries[i].goesLeft = true;
      this.commentaries[i].isFarRight = false;
      this.commentaries[i].isRight = true;
    }
  }

  farLeftToFarRight(i: number) {
    if (this.commentaries[i].isFarLeft && this.slideLeft) {
      this.commentaries[i].goesLeft = true;
      this.commentaries[i].goesRight = false;
      this.commentaries[i].isFarLeft = false;
      this.commentaries[i].isFarRight = true;
    }
  }
}