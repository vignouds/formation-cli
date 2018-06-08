import { Component, OnInit } from '@angular/core';
import Formation from '../Model/Formation';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isDisplay:boolean = true;
  affiche:boolean = true;

  formations:Array<Formation>=[];
  formationAngular:Formation = new Formation("Angular", "nouvelle formation", 1500, new Date(2018, 12, 1), new Date(2018, 12, 30));

  afficheFormation():void{
    this.affiche=!this.affiche;
  }

  constructor() { }

  getColorByElement(isFirst:boolean=false, isLast:boolean=false){
    if (isFirst==true) {
        return "red";
    }
    else if (isLast==true){
      return "green";
    }
    else {
      return "black";
    }
  }

  getBgColorByElement(isEven:boolean=false){
    if (isEven==true) {
        return "silver";
    }
    else {
      return "white";
    }
  }

  ngOnInit() {
    setInterval(()=>{
      this.isDisplay=!this.isDisplay;
    },1000)
    this.formations=[
      this.formationAngular,
      new Formation('Module TypeScript', 'ts', 1500, new Date(2018, 12, 1), new Date(2018, 12, 30)),
      new Formation('Module Python', 'py', 1500, new Date(2018, 12, 1), new Date(2018, 12, 30))
    ]
  }

}
