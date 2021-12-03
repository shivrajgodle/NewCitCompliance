import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Client } from '../Modal/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  data!:boolean;
  
  url = "http://localhost:8080/clients";
  constructor(private http:HttpClient) { }

  getClientData(){
    return this.http.get(this.url);
  }
 
  postClient(data:Client)
  {
    console.warn(data);
    return this.http.post(this.url,data);
  }
  updateClient(companyName: any,data: any)
  {
    return this.http.put(`${this.url}/${companyName}`,data);
  }


  getClientByName(companyName:any){
     return this.http.get(`${this.url}/${companyName}`);
  }
}
