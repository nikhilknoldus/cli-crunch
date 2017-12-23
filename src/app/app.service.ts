import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import {Subject} from 'rxjs/Subject'
import * as userConfig from '../assets/users.config.json';

@Injectable()
export class AppService {

private subject = new Subject();

  constructor(private http: Http) {
  }
  word:any = userConfig;
  baseUrl: any;
  respo: any;
  re: any = {};

  readingLocalFile() {
    console.log("Local json file objects " + JSON.stringify(this.word.base));
  }
  
  configFun() {
    return this.http.get('/assets/apis.config.json').map((res) => {
      this.respo = res.json()
      console.count("######## service function ###########")
      return this.respo;
    })
  }

  firstServiceFun() {
    return this.configFun()
      .flatMap((re) => this.http.get('https://' + re.base)).map((res: Response) => res.json())
  }

  secondServiceFun() {
    return this.configFun()
      .flatMap((re) => this.http.get('https://' + re.base)).map((res: Response) => res.json())
  }

  gettingList() {
    return this.http.get('/assets/apis.config.json').map(
      (res) => res.json()
    )
  }

  sendMessage(message){
    this.subject.next({text:message});
  }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}

