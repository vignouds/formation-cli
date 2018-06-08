import { Component, OnInit } from '@angular/core';
import  Formation from '../Model/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom:string='Seb'

  nom:string='Vignoud'

  formation:Formation = new Formation("Java", "formation Diginamic");

  formationJS:Formation;

  redGreen:string = "red";

  getFullName():string{
    return `${this.prenom} ${this.nom}`
  }

  isHidden:boolean=true;

  cacheTxt():void{
    this.isHidden = !this.isHidden;
  }

  mouseOver():void{
    console.log("Texte caché : mouseover");
  }

  mouseOut():void{
    console.log("Texte caché : mouseout");
  }

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.formationJS = new Formation('Module JavaScript', 'desc');
    }, 3000)

    setInterval(() => {
      if(this.redGreen == "red"){
        this.redGreen = "green";
      }
      else{
        this.redGreen = "red";
      }
    }, 2000)
  }

}
