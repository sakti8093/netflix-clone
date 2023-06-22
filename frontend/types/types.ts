export interface Genre {
    id: number
    name: string
  }
  
  export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }
  
  export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }

  export interface movie_detail {
    adult : boolean,
    backdrop_path : string,
    belongs_to_collection : {
      id : number,
      name : string,
      poster_path : string,
      backdrop_path : string
    },
    budget : number,
    genres : Genre[],
    homepage : string,
    id :number,
    imdb_id : string,
    original_language : string,
    original_title : string,
    overview : string,
    popularity : number,
    poster_path : string
  }

  export interface Casts {
    adult : boolean,
    gender : number,
    id : number,
    known_for_department : string,
    name : String,
    popularity : number,
    original_name : String,
    profile_path: string,
    credit_id:String,
    job : string,
}