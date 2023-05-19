import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesDetailComponent } from './component/movies-detail/movies-detail.component';
import { CastComponent } from './component/cast/cast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesDetailComponent,
    CastComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
