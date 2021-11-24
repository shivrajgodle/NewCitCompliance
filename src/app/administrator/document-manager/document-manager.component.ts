import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  tws:any;
  salesReg:any;
  rpt:any;


  tws1:boolean=false;
  salesReg1:boolean=false;
  rpt1:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  onTwsUpload(event:any) {
    this.tws=event.files;
    console.log(this.tws,"file upload");
    if(this.tws)
    {
      this.tws1=true;
    }
  }


  onSrUpload(event:any) {
    this.salesReg=event.files;
    console.log(this.salesReg,"file upload");
    if(this.salesReg)
    {
      this.salesReg1=true;
    }
  }


  onRptUpload(event:any) {
    this.rpt=event.files;
    console.log(this.rpt,"file upload");
    if(this.rpt)
    {
      this.rpt1=true;
    }
  }
}



