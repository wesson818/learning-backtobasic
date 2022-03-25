import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHeroes = id =>
  axios.get(`http://localhost:4000/superheroes/${id}`)


export const DynamicParallelQueriesPage = () => {
    const heroIds = [1,3]
    const results = useQueries(
      heroIds.map(id => {
        return {
          queryKey: ['super-heroes', id],
          queryFn: () => fetchSuperHeroes(id)
        }
      })
    )
    return (
        <>
        <h2>Dynamic Parallel Queries Page</h2>
        <h3>Super Heroes</h3>
        {results?.map(data => {
          return <div key={`${data?.data?.data?.id}`}>{data?.data?.data?.name}<br /><br /></div>
        })}
        </>
    )
}