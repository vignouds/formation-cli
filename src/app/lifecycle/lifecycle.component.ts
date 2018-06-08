import { Component, OnInit } from '@angular/core';
import Formation from '../Model/Formation';

const NOM_ANGULAR:string='Module Angular';
const NOM_JS:string='Module JavaScript';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  formation:Formation = new Formation(NOM_ANGULAR, 0, new Date("2018,1,1"), new Date("2018,1,1"));

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.formation= new Formation(this.formation.nom === NOM_ANGULAR ? NOM_JS : NOM_ANGULAR, 0, new Date("2018,1,1"), new Date("2018,1,1"));
    }, 1000)
  }
}
