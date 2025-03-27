import { Component, inject } from '@angular/core';
import { Commentaries } from '../../interfaces/commentaries.interface';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { SwitchlanguagedataService } from '../../services/switchlanguagedata.service';

@Component({
  selector: 'app-colleague-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './colleague-experience.component.html',
  styleUrl: './colleague-experience.component.scss'
})
export class ColleagueExperienceComponent {
  constructor(private translate: TranslateService) { };
  switchlanguagedata = inject(SwitchlanguagedataService);
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
      commentaryDe: "Hendrik ist ein äußerst freundlicher und angenehmer Team-Partner, der sich durch seine Fleißbereitschaft und große Wissbegierde auszeichnet. Durch seine Liebe zum Detail und die hohe Genauigkeit in seiner Arbeit ist er ein unschätzbares Mitglied für jedes Team. Zudem ist immer auf ihn Verlass. Es war eine super Zusammenarbeit mit ihm.",
      commentaryEn: "Hendrik is an extremely friendly and pleasant team partner who stands out for his diligence and great eagerness to learn. His attention to detail and high level of precision make him an invaluable member of any team. Moreover, he is always reliable. Working with him was a fantastic experience.",
      name: "Marcel Steffen",
      title: "Teampartner (DA Bubble)",
      goesLeft: false,
      goesRight: true,
      isFarRight: true,
      isFarLeft: false,
      isLeft: false,
      isShown: false,
      isRight: false,
    },
    {
      commentaryDe: "Ich hatte das Vergnügen, mit Hendrik in einem Gruppenprojekt zusammenzuarbeiten, und seine Verlässlichkeit und sein Engagement haben unser Team enorm bereichert. Er arbeitet äußerst strukturiert und effizient und hat einen sehr großen Teil zum Erfolg des Projektes beigetragen. Besonders beeindruckend war seine Eigeninitiative – er hat sich auch um weniger spannende Aufgaben gekümmert, damit unser Team reibungslos Arbeiten konnte. Ich würde jederzeit wieder mit ihm zusammenarbeiten!",
      commentaryEn: "I had the pleasure of collaborating with Hendrik on a group project, and his reliability and dedication greatly enriched our team. He works in a highly structured and efficient manner and contributed significantly to the project's success. What impressed me the most was his initiative—he also took care of less exciting tasks to ensure our team could work smoothly. I would gladly work with him again anytime!",
      name: "Sascha Töpfer",
      title: "Teampartner (JOIN)",
      goesLeft: false,
      goesRight: true,
      isFarLeft: false,
      isLeft: true,
      isShown: false,
      isRight: false,
      isFarRight: false,
    },
    {
      commentaryDe: "Hendrik ist ein äußerst zielstrebiger und vorausschauender Teamplayer, der stets den Überblick behielt und Fehler souverän beheben konnte. Er arbeitete sehr selbstständig, zeigte aber gleichzeitig eine starke Kommunikationsfähigkeit innerhalb der Gruppe. Durch sein offenes und konstruktives Miteinander trug er maßgeblich dazu bei, dass wir als Team schnell zusammenwuchsen, was die Zusammenarbeit noch angenehmer und effizienter machte. Sein Engagement und seine Zuverlässigkeit waren eine große Bereicherung für die Gruppe.",
      commentaryEn: "Hendrik is a highly goal-oriented and forward-thinking team player who always kept an overview and handled errors confidently. He worked very independently while also demonstrating strong communication skills within the group. His open and constructive collaboration significantly contributed to our team bonding quickly, making the teamwork even more enjoyable and efficient. His commitment and reliability were a great asset to the group.",
      name: "Osahon Schmolze",
      title: "Teampartner (Kochwelt)",
      goesLeft: false,
      goesRight: true,
      isFarLeft: false,
      isLeft: false,
      isShown: true,
      isRight: false,
      isFarRight: false,
    },
    {
      commentaryDe: "Durch die Zusammenarbeit mit Hendrik am Projekt hat man sofort bemerkt, dass er dafür brennt und großes Interesse zeigt, damit es mit dem richtigen Inhalt und zur richtigen Deadline  durchgeführt werden kann. Hendrik bot immer wieder seine Unterstützung an und stand für eventuelle Fragen zur Verfügung.",
      commentaryEn: "Through working with Hendrik on the project, it was immediately clear that he is passionate about it and highly motivated to ensure it was completed with the right content and on time. Hendrik consistently offered his support and was always available for any questions.",
      name: "Andreas Welker",
      title: "Teampartner (JOIN)",
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