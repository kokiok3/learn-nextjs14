import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-vidoes.module.css"

async function getTrailer(id: string) {
    // 에러 유발 코드
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // throw new Error('error');

    const response = await fetch(`${API_URL}/${id}/videos`, {
        cache: "force-cache",
    });
    return response.json();
}


export default async function MovieVideos({ id }: { id: string }) {
    const trailers = await getTrailer(id);

    return (
        <div className={styles.container}>
            {trailers.map(trailer => <iframe
                title={trailer.name}
                key={trailer.id}
                src={`https://youtube.com/embed/${trailer.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>)
            }
        </div >
    )
}