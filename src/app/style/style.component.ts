import { Component, OnInit } from '@angular/core';
import Formation from '../Model/Formation';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  formations:Array<Formation>=[];
  formationAngular:Formation = new Formation("Angular", 1500, new Date("2018, 12, 1"), new Date("2018, 12, 30"));

  constructor() { }

  handleFormationSelected(formation) {
    alert(`${formation.nom}`);
  }

  ngOnInit() {
    this.formations=[
      this.formationAngular,
      new Formation('Module typeScript', 2500, new Date("2018, 3, 5"), new Date("2018, 9, 15")),
      new Formation('Module python', 800, new Date("2019, 7, 8"), new Date("2020, 12, 8"))
    ]
  }

}
