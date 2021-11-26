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

    this.items = [
      {
          label: 'My Workspace',
          icon: 'pi pi-pw pi-file',
          items: [
              {label: 'My Projects', routerLink:"/admin/project", icon: 'pi pi-fw pi-plus',},
              {label: 'Document Manager', routerLink:"/admin/mydoc", icon: 'pi pi-fw pi-external-link'},
              
          ]
      }
    ]



  }



    visibleSidebar1:any;


    constructor(private primengConfig: PrimeNGConfig) {}

}
