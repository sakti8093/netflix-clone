import { base_url } from '@/utils/imageurl';
import Image from 'next/image';
import React from 'react'


const Page = async({ params }: { params: { movie: string }}) => {
    const movieDetail = await getDetail( Number(params.movie))
  return (
    <div>
        <div className='relative fill h-[100vh]' >
            <Image fill alt=''  src={`${base_url}${movieDetail.backdrop_path || movieDetail.poster_path}`}  />
        </div>
    </div>
  )
}

export default Page

const getDetail = (movie:Number) =>{
    
    const movieDetail = fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&append_to_response=videos`,{
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
          }
    }).then((response) =>response.json()).then((result)=>{return result})
    return movieDetail
}