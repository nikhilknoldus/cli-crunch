import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class AppService {

  constructor(private http: Http) {
   }

  baseUrl:any;
  respo:any;
  re:any = {};


configFun(){
            return this.http.get('/assets/apis.config.json').map ((res) => {
            this.respo = res.json()
            console.count("######## service function ###########")
            return this.respo;
           })
        }

  firstServiceFun(){
         return this.configFun()
        .flatMap((re) => this.http.get('https://'+re.base)).map((res: Response) => res.json())
  }

  secondServiceFun () {
     return this.configFun()
        .flatMap((re) => this.http.get('https://'+re.base)).map((res: Response) => res.json())
    }

  gettingList(){
  return this.http.get('/assets/apis.config.json').map(
    (res) => res.json()
    )}
 }  

