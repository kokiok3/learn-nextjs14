import Link from "next/link";
import Movie from "../../component/movie";

export const metadata = {
    title: 'Home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';
async function getMovies(){
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
            {movies.map(movie=>
             <Movie key={movie.id} title={movie.title} id={movie.id} posterPath={movie.poster_path} />
                // return <li key={movie.id}><Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>
                // return <li key={movie.id}><Link href={`/movie/${movie.id}?name=${movie.title}`}>{movie.title}</Link></li>
            )}

    </div>

    )
    
}