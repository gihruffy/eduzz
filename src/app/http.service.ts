import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ApiConfig } from './../environments/api.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  private headers: Headers;
  private requestOptions: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
  }

  setHeaders(){
    let headerParams = [
      {'Content-Type': 'application/json'},
      {"Accept": 'application/json'}
    ];

    let token = localStorage.getItem('token');
    if(token){
      headerParams['Authorization'] =  "Bearer " + token;
    }
    console.log(headerParams);
    this.headers = new Headers(headerParams);
    this.requestOptions = new RequestOptions({headers: this.headers});
  }

  post(url: string, data: any){
    this.setHeaders();
   // return this.http.post(ApiConfig.apiUrl + url, data, this.requestOptions).map((res: Response)=> res.json());
   return this.http.post(ApiConfig.apiUrl + url, data, this.requestOptions).toPromise()
   .then((res)=> {return res.json()})
   .catch((err)=>{
     console.log(err);
   });
  }

  put(url: string, data: any){
    this.setHeaders();
   // return this.http.post(ApiConfig.apiUrl + url, data, this.requestOptions).map((res: Response)=> res.json());
   return this.http.put(ApiConfig.apiUrl + url, data, this.requestOptions).toPromise()
   .then((res)=> {return res.json()})
   .catch((err)=>{
     console.log(err);
   });
  }

  delete(url: string){
    this.setHeaders();
    return this.http.delete(ApiConfig.apiUrl + url, this.requestOptions).toPromise()
    .then((res)=>{return res.json()})
    .catch((err)=>{
      console.log(err);
    });
  }

  

  get(url: string){
    this.setHeaders();
    //return this.http.get(ApiConfig.apiUrl + url, this.requestOptions).map((res: Response)=> res.json())
    return this.http.get(ApiConfig.apiUrl + url, this.requestOptions ).toPromise().then((res) => { return res.json() || []} );
  }


  externalGet(url: string){
    return this.http.get(url).toPromise().then((res)=>{return res.json() || []})
  }


}
