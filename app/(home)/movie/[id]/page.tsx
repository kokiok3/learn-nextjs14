
export default async function MovieDetailPage({params, searchParams}: {params: Promise<{id: string}>, searchParams: Promise<{name: string}>}) {
    const {id} = await params;
    const {name} = await searchParams;
    console.log(id);
    return (
        <h1>movie detail : {id} ? {name}</h1>
    )
}
// export default async function MovieDetailPage({params}) {
//     const prop = await params;
//     console.log(prop);
//     return (
//         <h1>movie detail</h1>
//     )
// }