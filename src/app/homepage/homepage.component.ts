import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api'



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {
    this.primengConfig.ripple = false;
  }



    visibleSidebar1!:boolean;


    constructor(private primengConfig: PrimeNGConfig) {}

}
