import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppService} from './app.service';
import { HomeComponent } from './home/home.component';
import { routing }        from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
