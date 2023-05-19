import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './component/movies/movies.component';
import { MoviesDetailComponent } from './component/movies-detail/movies-detail.component';

const routes: Routes = [
  {
    path: '',
    component:MoviesComponent
  },
  {
    path: ':id',
    component:MoviesDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
