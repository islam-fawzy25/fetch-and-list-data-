import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataListComponent } from './src/app/data-list/data-list.component'
import { DataServices } from './services/data.services';
import { NavBarComponent } from './src/app/nav-bar/nav-bar.component';
import { HomeComponent } from './src/app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
