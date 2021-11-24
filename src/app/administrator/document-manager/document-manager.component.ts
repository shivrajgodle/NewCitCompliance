import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  tws?: File;
  srg?: File;
  rpt?: File;

  file:any;

  constructor() { }

  ngOnInit(): void {
  }

  myUploader(event:any) {
    //event.files == files to upload

    // this.tws = event.files;
    // console.log(this.tws);

    // console.log("yoyo");
    
    // console.log(event);
    
    this.file = event.target.files[0];
    console.log(this.file);
    
    
    
    
  }

  myUploader1(event:any) {
    //event.files == files to upload
    this.srg = event.files;

    
  }
  myUploader2(event:any) {
    //event.files == files to upload
    
    this.rpt = event.files;
  }

  


  validate(){
    console.log("in validate");
    
  }

}



