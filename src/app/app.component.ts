import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private appService:AppService) { }
  
  title = 'app';
  data:any = {};

  listData: any = {};

 selectedIndex = "";

  ngOnInit(){   
    this.firstFun();
    this.secondFun();
    this.getList();

  }

  firstFun(){
   this.appService.firstServiceFun().subscribe (
      (data) => {
          this.data = data;
          console.log("1 >>>>>>>>>>>>"+ JSON.stringify(this.data));
    })
  }

  secondFun(){
   this.appService.secondServiceFun().subscribe (
      (data) => {
          this.data = data;
          console.log("2 >>>>>>>>>>>>"+ JSON.stringify(this.data));
    })
  }

  getList(){
    this.appService.gettingList().subscribe(
      (data) => {
        this.listData = data
        console.log("data>>>>>>>>>>>>>>>>>>>>>"+ JSON.stringify(this.listData));
    })  
  }

  random(){
    alert(Math.random());
  }

  select(i){
    this.selectedIndex = i;
  }
}
