import { API_URL } from "../app/(home)/page";

async function getTrailer(id: string){
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`, {
        cache: "force-cache",
    });
    return response.json();
}


export default async function MovieVideos({id}: {id: string}){
    const trailer = await getTrailer(id);

    return <h6>{JSON.stringify(trailer)}</h6>
}