import Player from "@/app/components/Player";
import Artists from "@/app/components/info/Artists";
import Back from "@/app/components/info/Back";
import MovieHeader from "@/app/components/info/MovieHeader";
import { Casts, movie_detail } from "@/types/types";
import React from "react";
interface movie_details {
  movieDetail : movie_detail,
  movieCasts : {
    cast : Casts[]
  }
}
const Page = async ({ params }: { params: { movie: string } }) => {
  let { movieDetail, movieCasts }:movie_details = await getDetail(Number(params.movie));
  console.log(movieDetail)
  const trailer = movieDetail.videos.results.filter(
    (video) => video.type === "Trailer"
  );
  const key = trailer[0].key;

  const actors = movieCasts.cast.filter(
    (movie) => movie.known_for_department === "Acting"
  );
  return (
    <div>
      <Back />
      <div className="relative h-[40vh]">
        <Player url={key} />
      </div>
      <div className="p-3" >
        <MovieHeader
          title={movieDetail.original_title}
          runtime={movieDetail.runtime}
          languages={movieDetail.original_language}
          overview={movieDetail.overview}
          vote={Math.round(movieDetail.vote_average * 10) / 10}
          genres={movieDetail.genres}
          companies={movieDetail.production_companies}
        />
        <Artists casts={actors} />
      </div>
    </div>
  );
};

export default Page;

const getDetail = async (movie: Number) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
  };

  const [movieDetail, movieCasts] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}?language=en-US&append_to_response=videos`,
      {
        headers: headers,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      }),
    fetch(
      ` http://api.themoviedb.org/3/movie/${movie}/casts?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      }),
  ]);
  return { movieDetail: movieDetail, movieCasts: movieCasts };
};
