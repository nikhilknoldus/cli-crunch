import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
   message: any;
    subscription: Subscription;
  constructor(private appService:AppService) { 
      this.subscription = this.appService.getMessage().subscribe(message => { this.message = message; });
  }
  
  title = 'app';
  data:any = {};


  listData: any = {};

  selectedIndex = "";

  ngOnInit(){   
    // this.firstFun();
    // this.secondFun();
    this.getList();
    this.appService.readingLocalFile();
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
    this.firstFun();
    this.selectedIndex = i;
  }
}
