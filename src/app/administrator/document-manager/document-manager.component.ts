import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/Services/project-service.service';

@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  tws?: File;
  srg?: File;
  rpt?: File;


  tws1: boolean=false;
  srg1: boolean=false;
  rpt1: boolean=false;

  data:any[]=[];

  projectIdData:string[]=[];

  finalProjId!:string;
  file:any;

  constructor(private pro:ProjectServiceService) { }

  ngOnInit() {

    
    this.pro.getTeamData().subscribe((result:any)=>{
        this.data=result;
        console.log("yoyo",this.data);
        
      })
 
  }

  check(){
    for(let i=0;i<this.data.length;i++){
      console.log("hello i am in check");
      console.log("hhhhhhh",this.data[i].projectId);
      
    }

    

    
    
  }

  myUploader(event:any) {
    this.file = event.target.files[0];
    console.log(this.file);
    this.tws1=true;
  }

  myUploader1(event:any) {
    //event.files == files to upload
    this.srg = event.files;
    this.srg1=true; 
    console.log(this.srg);
    

    
  }
  myUploader2(event:any) {
    //event.files == files to upload
    this.rpt = event.files;
    this.rpt1=true;
    console.log(this.rpt);
    
  }

  


  validate(){
    console.log("in validate");
    
  }

}



