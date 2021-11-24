import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  url = "http://localhost:3000/project";

  constructor(private http:HttpClient) { }

  getProjectData(){
    return this.http.get(this.url);
  }

  createProject(data:any){
        return this.http.post(this.url,data);
  }
}
