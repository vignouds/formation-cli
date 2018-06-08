import { Component, OnInit, Input} from '@angular/core';
import Formation from '../Model/Formation';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  @Input()
  formation:Formation;

  @Input()
  i:number;

  @Input()
  f:boolean;

  @Input()
  l:boolean;

  @Input()
  e:boolean;

  constructor() { }

  ngOnInit() {
  }

}
