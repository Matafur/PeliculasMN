import { Component, OnInit,EventEmitter, Output } from '@angular/core';import { MovieService } from '../../services/movie-services.service';
import { ActivatedRoute, Params } from '@angular/router'
import { cast } from '../../share/Models/movies.model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent {

  @Output()movieDetail: EventEmitter<any> = new EventEmitter();

  constructor(
    private movieService: MovieService,
    private activatedRoute : ActivatedRoute) { }

    detailCast2 : cast[] = [];

    detailCast: cast = {
      id : "", 
      name: "",
      profile_path: "",
      character: "",
    } 
  
    ngOnInit(): void {
      this.star();
    }
  
    star(){
      this.activatedRoute.params.subscribe((params: Params)=>{
        console.log(params)
        const id = params['id'];
        console.log(id);
        this.getMovieById(id);
      });
    }

    getMovieById(id: number){
      this.movieService.detailCast(id)
      .subscribe(data =>{
        this.detailCast2 = data.cast;
  
        
      });
    }


}