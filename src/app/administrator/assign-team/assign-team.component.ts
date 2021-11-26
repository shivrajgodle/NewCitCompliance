import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  userData:User[]=[];
  selectedUser!:string;

  constructor(private router:ActivatedRoute, private pro:ProjectServiceService, private obj:UserServiceService ) { }

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
  

}
