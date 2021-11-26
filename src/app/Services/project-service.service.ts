import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
