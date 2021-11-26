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

  pid!:any;
  
  projectIdData:string[]=[];

  finalProjId!:string;
  file:any;


  file26ASName!:string;
  fileSRName!:string;
  fileRPTName!:string;

  constructor(private pro:ProjectServiceService) { }

  ngOnInit() {

    
    this.pro.getTeamData().subscribe((result:any)=>{
        this.data=result;
        // console.log("yoyo",this.data);
        
        // for(let i=0;i<this.data.length;i++){
        //   console.log(this.data[i].data[i].id);
        //   if(localStorage.getItem("projId")===this.data[i].id)  
        //   {
        //     console.log(this.data[i].pid,"akkiiii");
            
        //   }
        // }
      })
      
      this.pid=localStorage.getItem("pid");
      console.log(this.pid);
      
     //localStorage.clear();

     console.log(this.pid);
     
      
  }

  myUploader(event:any) {
    console.log(event.files);
    for(let i=0;i<event.files.length;i++)
    {
      console.log(event.files[i].name);
      this.file26ASName=event.files[i].name;          
    }
    
    this.file = event.files;

    this.tws1=true;
  }

  myUploader1(event:any) {
    //event.files == files to upload
    for(let i=0;i<event.files.length;i++)
    {
      console.log(event.files[i].name);
      this.fileSRName=event.files[i].name;          
    }

    this.srg = event.files;
    this.srg1=true; 
    console.log(this.srg);
    

    
  }
  myUploader2(event:any) {
    //event.files == files to upload
    for(let i=0;i<event.files.length;i++)
    {
      console.log(event.files[i].name);
      this.fileRPTName=event.files[i].name;          
    }

    this.rpt = event.files;
    this.rpt1=true;
    console.log(this.rpt);
    
  }

  


  validate(){
    console.log("in validate");
    
  }

}



function check() {
  throw new Error('Function not implemented.');
}

