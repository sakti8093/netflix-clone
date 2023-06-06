import requests from "@/api/Api";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default async function Home() {

  const data = await getData();
  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero prop={data.NetflixOriginals} />
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
