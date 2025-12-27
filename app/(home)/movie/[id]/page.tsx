import { Metadata } from "next";
import { API_URL } from "../../page";
import MovieInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Movie Detail',
}

async function getMovie(id: string){
    console.log('fetching movies: ', Date.now());
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
async function getTrailer(id: string){
    console.log('fetching trailer: ', Date.now());
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetailPage({params, searchParams}: {params: Promise<{id: string}>, searchParams: Promise<{name: string}>}) {
    const {id} = await params;
    const {name} = await searchParams;

    // 직렬 처리
    // const movie = await getMovie(id);
    // const trailer = await getTrailer(id);
    
    // 병렬 처리
    // const [movie, trailer] = await Promise.all([getMovie(id), getTrailer(id)]);
    return (
        <div>
            <h1>movie detail : id: {id}, name: {name}</h1>
            
            {/* 병렬처리 */}
            {/* <div>{movie.title}</div>
            <div>{trailer.length}</div> */}

            <Suspense fallback={<div>Loading...Info</div>}>
                <MovieInfo id={id} />
            </Suspense>

            <br />

            <Suspense fallback={<div>Loading...Videos</div>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}
// export default async function MovieDetailPage({params}) {
//     const prop = await params;
//     console.log(prop);
//     return (
//         <h1>movie detail</h1>
//     )
// }