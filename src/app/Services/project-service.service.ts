import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  url = "http://localhost:8080/projects";

  constructor(private http:HttpClient) { }

  getProjectData(){
    return this.http.get(this.url);
  }

  createProject(data:any){
    console.log(data,"inside project service");
    
        return this.http.post(this.url,data);
  }

  getProjectById(id:any)
  {    
    return this.http.get(`${environment.api_url+"/project"}/${id}`);
      // return this.http.get('${environment.api_url+"/project"}/${id}');
  }

  getTeamData()
  {
    return this.http.get(`${environment.api_url+"/team"}`);
  }
}
