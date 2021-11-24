import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Modal/client';
import { Project } from 'src/app/Modal/project';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { ProjectServiceService } from 'src/app/Services/project-service.service';

interface Year{
  year:number;
} 

interface cName{
  cName:string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {





 //for activation part
//  checked1: boolean = false;
checked2: boolean = true;

//variable for fetching data
client1:Client[] = [];
project1:Project[]=[];
project!: Project;

submitted?:boolean;

projectDialog?:boolean;
userEditDialogue?:boolean;

selectedUser!:boolean;


selectedClient!:string;
selectedYear!:number;


cNames:any;
years!:any;

constructor(private obj:ClientServiceService, private pro:ProjectServiceService) {
  this.years=[];
  for(let i=1950;i<=2050;i++)
  {
    this.years.push({
      year:i
    } );
  }  



  // for(let i=0;i<this.client1.length;i++)
  // {
  //   this.cNames[i]=this.client1[i+1].companyName;
  //   console.log(this.cNames);
    
  // }
}


ngOnInit() {

  //fetching data from service method and display all data here...

  // this.obj.getUserData().subscribe((result:any)=>{
  //   this.user1 = result;
  // })

  this.obj.getClientData().subscribe((data:any)=>{
    this.client1=data;
    console.log(this.client1);
    
  })

  this.pro.getProjectData().subscribe((data:any)=>{
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

    //   this.obj.updateUser(this.user.id,this.user).subscribe((result)=>{
    //   window.location.reload();
    // })  
  }
  else 
  {
     this.project.clientName=this.selectedClient;
     this.project.annualYear=this.selectedYear;

      this.project.id = this.createId();
      //this.user.status=true;
      //this.project.push(this.user);
      this.pro.createProject(this.project).subscribe((result)=>{
              window.location.reload();
      })
  }
  
  
  this.projectDialog = false;
  this.project = {};

}   
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

//Edit client information
  // editUser(user:User){
  // this.user={...user};
  // this.submitted=false;
  // this.userDialogue=true;
  // console.log(user);
  
}

//method for changing the status of user
// changeStatus(user:User)
// {

//  this.user={...user};

//    if(this.user.id)
//    {        
//      this.obj.updateUser(this.user.id,this.user).subscribe((result)=>{
//      console.log("status"+result);
//        }) 
//    }
// }



