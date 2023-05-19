import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { genres, movies } from '../../share/Models/movies.model';
import { MovieService } from '../../services/movie-services.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})

export class MoviesDetailComponent implements OnInit{

  @Output()movieDetail: EventEmitter<any> = new EventEmitter();

  API_KEY :String ="api_key=f269218f9ac41fda847402ed563424ef";

  public indice : number = 1;
  constructor(
    private movieService: MovieService,
    private activatedRoute : ActivatedRoute) { }

  cartelera: movies[]=[];
  genres : genres[] = [];

  detallMovi: movies = {
    id : "",
    poster_path: "",
    title: "",
    release_date: "",
    backdrop_path:"",
    overview:"",
    original_language:"",
    vote_average:"",
    budget:"",
    genres: []
  } 

  public title : string = '';

  ngOnInit(): void {
    this.star();
  }

  star(){
    this.activatedRoute.params.subscribe((params: Params)=>{
      const id = params['id'];
      this.getMovieById(id);
    });
  }

  getMovieById(id: number){
    this.movieService.detailMovie(id)
    .subscribe(data =>{
      this.detallMovi = data;
      this.genres = this.detallMovi.genres;
    });
  }
}
