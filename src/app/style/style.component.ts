import { Component, OnInit } from '@angular/core';
import Formation from '../Model/Formation';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  formations:Array<Formation>=[];
  formationAngular:Formation = new Formation("Angular", "nouvelle formation");

  constructor() { }

  ngOnInit() {
    this.formations=[
      this.formationAngular,
      new Formation('Module TypeScript', 'ts'),
      new Formation('Module Python', 'py')
    ]
  }

}
