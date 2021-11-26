import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/Modal/team';
import { User } from 'src/app/Modal/user';
import { ProjectServiceService } from 'src/app/Services/project-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.css']
})
export class AssignTeamComponent implements OnInit {

  id!:string;
  data:any;
  teamData:Team[]=[];
  userData:User[]=[];
  selectedUser:any[]=[];
  singleUser:any;

  button:boolean=false;

  


  constructor(private router:ActivatedRoute,private route:Router, private pro:ProjectServiceService, private obj:UserServiceService ) { }

  ngOnInit(): void {
    
    
    this.id = this.router.snapshot.params['id'];
    
    console.log(this.id,"unique ID");
    
    this.pro.getProjectById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.data=result;
    })


    this.obj.getUserData().subscribe((result:any)=>{
      this.userData=result;
      console.log(this.userData,"user data fetched");
    })
  }

  addMember()
  {
    this.button=true;
    console.log(this.selectedUser,"aksksksksk");
 
    this.obj.getUserByName(this.selectedUser).subscribe((result:any)=>{
      this.teamData.push(result);
      for(let i=0;i<this.teamData.length;i++)
      {
        this.teamData[i].projectId=this.data.id;
      }
    })

    localStorage.setItem('projId',this.data.id);
  }


  saveTeam(){
    //this.teamData = this.teamData.concat(this.data);

//    this.teamData.push(this.data);

    this.teamData.join(this.data.id);

    this.obj.saveTeam(this.teamData).subscribe((result:any)=>{
      console.log("team data saved",result);
      //this.route.navigateByUrl("/admin/mydoc");
      })  
  }


  docUpload(){
       this.route.navigateByUrl("/admin/mydoc");
  }
}
