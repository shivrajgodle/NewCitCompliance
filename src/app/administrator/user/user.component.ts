import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modal/user';
import { UserServiceService } from 'src/app/Services/user-service.service';
import Swal from 'sweetalert2';
import {MessageService} from 'primeng/api';

interface Role {
  role?: string
}



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
  
})
export class UserComponent implements OnInit {

 //for activation part
//  checked1: boolean = false;
 checked2: boolean = true;

 //variable for fetching data
 user1:User[] = [];

 user!: User;

 submitted?:boolean;

 userDialogue?:boolean;
 userEditDialogue?:boolean;

 selectedUser!:boolean;

 roles!:any[];

 selectedRole!:string;



 constructor(private obj:UserServiceService,private messageService: MessageService) {

  this.roles=[
    {role:'Project Team Member'},
    {role:'Project Manager'},
    {role:'Quality Manager'},
    {role:'Project Partner'},
    {role:'IT Admin'},
    {role:'Buisness Admin'}
  ];
 }

 

 ngOnInit(): void {

   //fetching data from service method and display all data here...

   this.obj.getUserData().subscribe((result:any)=>{
     this.user1 = result;
   })
 }


//to open dialog box
 addUser(){
   this.user={};
   this.submitted=false;
   this.userDialogue=true;
 }
//to hide dialog box
 hideDialog(){
   this.userDialogue=false;
   this.submitted=false;
 }

 //save client information
 saveUser(){
   this.submitted=true;
   if(this.user.name?.trim()){
     if(this.user.id){



      //swal fire code starts here

    this.hideDialog();
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')

        //Logic for Update
        this.user.role=this.selectedRole;
        this.obj.updateUser(this.user.id,this.user).subscribe((result)=>{
        window.location.reload();
      })          

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

    //swal fire code ends here

   }
   else 
   {
      this.user.role=this.selectedRole;
       this.user.id = this.createId();
       this.user.status=true;
       this.user1.push(this.user);
       this.obj.postUser(this.user).subscribe((result)=>{
        this.messageService.add({severity:'success', summary:'Success', detail:'Client Created Successfully'});

      //  window.location.reload();
       })
   }
   
   
   this.userDialogue = false;
  //  this.user = {};

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
   for (let i = 0; i < this.user1.length; i++) {
       if (this.user1[i].id === id) {
           index = i;
           break;
       }
   }
   return index;
 }

 //Edit client information
   editUser(user:User){
   this.user={...user};
   // this.submitted=false;
   this.userDialogue=true;
   console.log(user);
   
 }

 //method for changing the status of user
 changeStatus(user:User)
 {

  this.user={...user};

    if(this.user.id)
    {        
      this.obj.updateUser(this.user.id,this.user).subscribe((result)=>{
      console.log("status"+result);
        }) 
    }
}


}
