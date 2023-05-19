export interface movies{
    id:string;
    poster_path:string;
    title: string;
    release_date: string;
    backdrop_path:string;
    overview:string;
    original_language:string;
    vote_average:string;
    budget:string;
    genres :genres[];
}

export interface genres{
    id:string;
    name: String;
}
  

export interface cast{
    id:string;
    name: String;
    profile_path: String;
    character: String;
}

