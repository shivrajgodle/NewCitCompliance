import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Client } from 'src/app/Modal/client';
import { Project } from 'src/app/Modal/project';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { ProjectServiceService } from 'src/app/Services/project-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';


interface Year{
  year:number;
} 

 interface Activity{
  activity:string;
}


@Component({
  selector: 'app-mt-projects',
  templateUrl: './mt-projects.component.html',
  styleUrls: ['./mt-projects.component.css']
})
export class MtProjectsComponent implements OnInit {

  checked2: boolean = true;

  //variable for fetching data
  client1:Client[] = [];
  project1:Project[]=[];
  


  clientData:any[]=[];

  activities:Activity[]=[];

  project!: Project;

  submitted?:boolean;

  projectDialog?:boolean;
  userEditDialogue?:boolean;

  selectedUser!:boolean;


  selectedClient!:any;
  selectedYear!:number;
  selectedActivity!:string;

  singleClientPrecisionId!:string;

  itr:any;

  cNames:any;
  years:Year[];

  constructor(private user:UserServiceService,private obj:ClientServiceService, private pro:ProjectServiceService, private router:Router) {
    this.years=[];
    for(let i=1951;i<=2050;i++)
    {
      this.years.push({
        year:i      
      });
    }

    this.activities=[
      {activity:'Gross Return'},
      {activity:'Net Returns'}
    ]
  }


  ngOnInit() {
    this.obj.getClientData().subscribe((data:any)=>{
        this.client1=data;  
    })


    this.pro.getProjectData().subscribe((data:any)=>{
        this.project1=data;
    })

    this.user.getUserData().subscribe((data:any)=>{
      this.project1=data;
  })
  }




      //to open dialog box
  addProject(){
    this.project={};
    this.submitted=false;
    this.projectDialog=true;
  }
      //to hide dialog box
  hideDialog(){
    this.projectDialog=false;
    this.submitted=false;
  }

      //save client information
  createProject(){
    this.submitted=true;
    if(this.project.projectName?.trim()){
      if(this.project.id){
        this.project.clientName=this.selectedClient;
        this.project.annualYear=this.selectedYear;
        this.project.activity=this.selectedActivity;
      }
      else 
      {
        this.project.clientName=this.selectedClient;
        this.project.annualYear=this.selectedYear;
        this.project.activity=this.selectedActivity;

        this.project.id = this.createId();
        this.pro.createProject(this.project).subscribe((result)=>{
          window.location.reload();
        })
      }
        
        
      this.projectDialog = false;
      this.project = {};
    }   
  }

  onITRUpload(event:any,project:Project) {
    this.itr=event.files;
    console.log(project);
        
    console.log(this.itr,"file upload");
        
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


  findIndexById(id:string)
  {
    let index = -1;
    for (let i = 0; i < this.project1.length; i++) {
      if (this.project1[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}