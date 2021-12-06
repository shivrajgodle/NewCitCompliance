export interface Project{
    id?:number;
    clientId?:string;
    projectName?:string;
    activity?:string;
    annualYear?:string;
    projectManagerId?:number;
    qualityManagerId?:number ;
    teamMemberId1?:number;
    teamMemberId2?:number;
    teamMemberId3?:number;
  }



  export interface ProjectData{
    id?:number;
    clientId?:string;
    projectName?:string;
    activity?:string;
    annualYear?:number;
    projectManagerId?:number;
    qualityManagerId?:number ;
    teamMemberId1?:number;
    teamMemberId2?:number;
    teamMemberId3?:number;
    ceatedAt?:Date;
    updatedAt?:Date;
    createdBy?:string;
  }

  
