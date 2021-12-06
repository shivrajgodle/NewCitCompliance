import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Client, ClientData } from 'src/app/Modal/client';
import { Project } from 'src/app/Modal/project';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { ProjectServiceService } from 'src/app/Services/project-service.service';
import { UserData } from 'src/app/Modal/user';
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

 

 //for activation part
//  checked1: boolean = false;
checked2: boolean = true;

//variable for fetching data
client1:Client[] = [];
project1:Project[]=[];
user1:UserData[]=[];
clientData:any[]=[];

activities:Activity[]=[];

project!: Project;

submitted?:boolean;

projectDialog?:boolean;
userEditDialogue?:boolean;

selectedUser!:boolean;

selectedProjectManager!:any;
selectedQualityManager!:any;
selectedTeamMember1!:any;
selectedTeamMember2!:any;
selectedTeamMember3!:any;

selectedClientId!:any;
selectedYear!:any;
selectedActivity!:any;

singleClientPrecisionId!:string;

loader:boolean=true;
itr:any;

cNames:any;
years:Year[];

constructor(private obj:ClientServiceService, private pro:ProjectServiceService,private user:UserServiceService, private router:Router) {
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
    this.client1=data['content'];      
  })


  this.pro.getProjectData().subscribe((data:any)=>{
    if (data) 
    {
      this.hideloader();
    }
    this.project1=data['content'];
  })

  this.user.getUserData().subscribe((data:any)=>{
    this.user1=data['content'];
  })

}
hideloader() {
    this.loader=false;
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
      this.project.clientId=this.selectedClientId.id;
      this.project.annualYear=this.selectedYear.year;
      this.project.activity=this.selectedActivity.activity;
      this.project.projectManagerId=this.selectedProjectManager.memberid;
      this.project.qualityManagerId=this.selectedQualityManager.memberid;
      this.project.teamMemberId1=this.selectedTeamMember1.memberid;
      this.project.teamMemberId2=this.selectedTeamMember2.memberid;
      this.project.teamMemberId3=this.selectedTeamMember3.memberid;
  }
  else 
  {
     this.project.clientId=this.selectedClientId.id;
     this.project.annualYear=this.selectedYear.year;
     this.project.activity=this.selectedActivity.activity;
     this.project.projectManagerId=this.selectedProjectManager.memberid;
     this.project.qualityManagerId=this.selectedQualityManager.memberid;
     this.project.teamMemberId1=this.selectedTeamMember1.memberid;
     this.project.teamMemberId2=this.selectedTeamMember2.memberid;
     this.project.teamMemberId3=this.selectedTeamMember3.memberid;

      this.project.id = parseInt(this.createId());
      console.log(this.project,"before creating project");
      
     this.pro.createProject(this.project).subscribe((result)=>{
       console.log(result,"after project creation");
       
              //window.location.reload();
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


findIndexById(id:number)
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

editProject(projects:Project){
  this.project={...projects};
      // this.submitted=false;
      this.projectDialog=true;
}
}