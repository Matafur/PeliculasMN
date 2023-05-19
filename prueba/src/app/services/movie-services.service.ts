import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environmnet';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient : HttpClient) { }

  listaPeliculas(indice: number ){
    return this.httpClient.get<any>(environment.Url_Api +indice);
  }

  detailMovie(id: number ){
    console.log("Este es ide de la pelicula que va a enviar"+id);
    console.log("valor de la URL")
    console.log(environment.Detail_Url_1+ id +environment.Detail_Url_2)
    return this.httpClient.get<any>(environment.Detail_Url_1+ id +environment.Detail_Url_2);
  }

  pelicula(url:string | []){
    return this.httpClient.get<[]>(`${url}`);
  }

  detailCast(id: number ){
    return this.httpClient.get<any>(environment.Url_cast1 + id + environment.Url_cast2);
  }
}