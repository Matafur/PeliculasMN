import { Component, Input, OnInit } from '@angular/core';
import { movies } from '../../share/Models/movies.model';
import { MovieService } from '../../services/movie-services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  API_KEY: String = "api_key=f269218f9ac41fda847402ed563424ef";

  public indice : number = 1;
  card: movies[]=[];
  cartelera: movies[]=[];
  @Input()mundo: any

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.listaPeliculas(this.indice)
    .subscribe(movies =>{
      this.cartelera = movies.results
      console.log(this.cartelera)
    })
  }
  getDetailMovie(id:number){
    console.log(id)
    this.movieService.listaPeliculas(this.indice)
    .subscribe(movies =>{
      this.cartelera = movies.results
      console.log(this.cartelera)
    })
  }

    NextPage(){
      this.indice ++;
      this.getAllMovies();
    }

    clickProduct(id: number) {
      console.log(id);
    }
    /*
    PreviousPage(){
      this.indice --;
      this.getAllMovies();
    }
    */
}
