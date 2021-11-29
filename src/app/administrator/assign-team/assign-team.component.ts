import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Team } from 'src/app/Modal/team';
import { User } from 'src/app/Modal/user';
import { ProjectServiceService } from 'src/app/Services/project-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.css'],
  providers: [MessageService]  
})
export class AssignTeamComponent implements OnInit {

  id!:string;
  data:any;
  teamData:Team[]=[];
  userData:User[]=[];
  selectedUser:any;
  singleUser:any;

  clicked!:boolean;


  addButton:boolean=false;
  saveButton:boolean=false;
  


  constructor(private router:ActivatedRoute,private route:Router, private pro:ProjectServiceService, private obj:UserServiceService,private messageService: MessageService ) { }

  ngOnInit(): void {
    
    
    this.id = this.router.snapshot.params['id'];
    
    this.pro.getProjectById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.data=result;
    })


    this.obj.getUserData().subscribe((result:any)=>{
      this.userData=result;
    })
  }

  addMember()
  {
    this.addButton=true;
    //this.teamData.projectId=this.data.id;
    this.obj.getUserByName(this.selectedUser).subscribe((result:any)=>{
         this.teamData.push(result);

     })
  }


  saveTeam(event:any){

    event.target.disabled=true;
    //this.clicked=false;

    localStorage.setItem("pid",this.data.id);
    this.saveButton=true;
    //to save project ID in team data
    for(let i=0;i<this.teamData.length;i++)
    {
      this.teamData[i].projectId=this.data.id;
    }
  
    //this.teamData.push("projectId":this.data.id);

    this.obj.saveTeam(this.teamData).subscribe((result:any)=>{
      console.log("Team saved",this.teamData);
      
      //nothing happen
      })  
      this.messageService.add({severity:'success', summary:'Success', detail:'Team saved Successfully'});
  }


  docUpload(){
    localStorage.setItem("pid",this.data.id)
       this.route.navigateByUrl("/admin/mydoc");
  }
}
