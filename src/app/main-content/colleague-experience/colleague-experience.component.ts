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
      commentary: "Kommentartext Nr 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name A",
      title: "Projektpartner",
      isShown: false,
      isLeft: false,
      isRight: false,
    },
    {
      commentary: "Kommentartext Nr 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name B",
      title: "Projektpartner",
      isShown: false,
      isLeft: false,
      isRight: false,
    },
    {
      commentary: "Kommentartext Nr 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name C",
      title: "Projektpartner",
      isShown: false,
      isLeft: true,
      isRight: false,
    },
    {
      commentary: "Kommentartext Nr 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name D",
      title: "Projektpartner",
      isShown: true,
      isLeft: false,
      isRight: false,
    },
    {
      commentary: "Kommentartext Nr 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name E",
      title: "Projektpartner",
      isShown: false,
      isLeft: false,
      isRight: true,
    },
    {
      commentary: "Kommentartext Nr 6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name F",
      title: "Projektpartner",
      isShown: false,
      isLeft: false,
      isRight: false,
    },
    {
      commentary: "Kommentartext Nr 7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem provident excepturi dolor amet dolores doloribus repudiandae ducimus, corporis ab obcaecati aliquam pariatur! Maxime, amet!",
      name: "Name G",
      title: "Projektpartner",
      isShown: false,
      isLeft: false,
      isRight: false,
    },
  ]

  count = this.commentaries.length-1; //(0-6)

  addHover(index: number){
    if (!this.arrows[index].isHovered) {
    this.arrows[index].isHovered = true;
    
    
  }
}

removeHover(index: number){
    if (this.arrows[index].isHovered) {
      this.arrows[index].isHovered = false;
    }
  }

  //  next = index wird größer (x -> right -> shown -> left -> y)
  next(i: number){
    if (i >= 0 && this.commentaries[i].isShown) {
      this.commentaries[i].isShown = false;
      this.replaceLeftOnNext(i);
      this.replaceRightOnNext(i);
      this.commentaries[i].isLeft = true; //zusletzt weil sonst wir es in nextLeft überschrieben
    } if (i < 0 && this.commentaries[i].isShown) {
      i = this.count;
      this.commentaries[i].isShown = false;
      this.replaceLeftOnNext(i);
      this.replaceRightOnNext(i);
      this.commentaries[i].isLeft = true; //zusletzt weil sonst wir es in nextLeft überschrieben
    }
  }

  replaceLeftOnNext(i: number){
    let leftI = i-1;
    if (leftI >= 0) {
      this.commentaries[leftI].isLeft = false;
    } else {
      leftI = this.count;
      this.commentaries[leftI].isLeft = false;
    }
  }

  replaceRightOnNext(i: number){ //später noch kürzen!!
    let rightI = i+1;
    let farRightI = i+2;  // nötig zum rendern eines neuen Kommentars zur rechten
    if (farRightI <= this.count) { //neues Kommentar ganz rechts rendern
      this.commentaries[farRightI].isRight = true;
    } else {
      farRightI = 0;
      this.commentaries[farRightI].isRight = true;
    }
    
    if (rightI <= this.count) {
      this.commentaries[rightI].isRight = false;
      this.commentaries[rightI].isShown = true;
    } else {
      rightI = 0;
      this.commentaries[rightI].isRight = false;
      this.commentaries[rightI].isShown = true; //verschiebt rechtes Kommetar in die Mitte
    }
  }

  //  prev = index wird kleiner (x -> left -> main -> right -> y)
  prev(i: number){
    if (i <= this.count && this.commentaries[i].isShown) {
      this.commentaries[i].isShown = false;
      this.replaceLeftOnPrev(i);
      this.replaceRightOnPrev(i);
      this.commentaries[i].isRight = true;
    } if (i > this.count && this.commentaries[i].isShown) {
      i = 0;
      this.commentaries[i].isShown = false;
      this.replaceLeftOnPrev(i);
      this.replaceRightOnPrev(i);
      this.commentaries[i].isRight = true;
    }
  }

  replaceRightOnPrev(i: number){
    let rightI = i+1;
    if (rightI <= this.count) {
      this.commentaries[rightI].isRight = false;
    } else {
      rightI = 0;
      this.commentaries[rightI].isRight = false;
    }
  }

  replaceLeftOnPrev(i: number){    // index-2 => 
    let leftI = i-1;    // proove im index >=0
    let farLeftI = i-2;
    if (farLeftI >=0) {
      this.commentaries[farLeftI].isLeft = true;
    } else {
      farLeftI = this.count;
      this.commentaries[farLeftI].isLeft = true;
    }
    if (leftI >=0) {
        this.commentaries[leftI].isLeft = false;
        this.commentaries[leftI].isShown = true;
    } else {
      leftI = this.count;
      this.commentaries[leftI].isLeft = false;
      this.commentaries[leftI].isShown = true;
    }
  }
}