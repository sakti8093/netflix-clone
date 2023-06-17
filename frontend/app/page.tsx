import requests from "@/api/Api";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

export default async function Home() {

  const data = await getData();
  return (
    <div className="">
        <Navbar />
        <Hero prop={data.NetflixOriginals} />
        <div className="absolute w-full top-[60vh] md:top-[80vh]" >
        <MainSection title={"Trending Movies"} prop={data.Trending} />
        <MainSection title={"Netflix Originals"} prop={data.NetflixOriginals} />
        <MainSection title={"Action Movies"} prop={data.ActionMovies} />
        <MainSection title={"Comedy Movies"} prop={data.ComedyMovies} />
        <MainSection title={"Romance Movies"} prop={data.RomanceMovies} />
        </div>
    </div>
  )
}

const getData = async() => {
    const [ActionMovies,NetflixOriginals,ComedyMovies,Documentaries,RomanceMovies,Trending,TopRated] = await Promise.all([
      fetch(requests.fetchActionMovies).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchNetflixOriginals).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchComedyMovies).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchDocumentaries).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchRomanceMovies).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchTrending).then((response) => response.json()).then((data) => data.results),
      fetch(requests.fetchTopRated).then((response) => response.json()).then((data) => data.results)
    ])
    return {
      ActionMovies,NetflixOriginals,ComedyMovies,Documentaries,RomanceMovies,Trending,TopRated
    }
}
