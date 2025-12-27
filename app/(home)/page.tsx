import Link from "next/link";
import Movie from "../../component/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: 'Home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';
async function getMovies() {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(API_URL, {
        // 캐시 설정을 해주어서 2번째 접속부터는 로딩없이 캐시데이터를 사용함
        cache: "force-cache",
    });
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie =>
                <Movie key={movie.id} title={movie.title} id={movie.id} posterPath={movie.poster_path} />
                // return <li key={movie.id}><Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>
                // return <li key={movie.id}><Link href={`/movie/${movie.id}?name=${movie.title}`}>{movie.title}</Link></li>
            )}

        </div>

    )

}