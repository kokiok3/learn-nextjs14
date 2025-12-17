"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
    title: string;
    id: number;
    posterPath: string;
}

export default function Movie({title, id, posterPath}: MovieProps){
    const router = useRouter();
    const handleClick = ()=>{
        router.push(`/movie/${id}`);
    }

    return <div className={styles.movie}>
    <img src={posterPath} alt={title} onClick={handleClick} />
    <Link href={`/movie/${id}`}>{title}</Link>
</div>
}