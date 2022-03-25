import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () =>
axios.get('http://localhost:4000/superheroes')

const fetchFriends = () => 
    axios.get('http://localhost:4000/friends')

export const ParallelQueriesPage = () => {
    const { data: heroes } = useQuery('super-heroes',fetchSuperHeroes)
    const { data: friends } = useQuery('friends',fetchFriends)
    return (
        <>
        <h2>Parallel Queries Page</h2>
        <h3>Super Heroes</h3>
        {heroes?.data.map(hero => {
          return <div key={`${hero.id}`}>{hero.name}<br /><br /></div>
        })}
        <h3>Friends</h3>
        {friends?.data.map(friend => {
          return <div key={`${friend.id}`}>{friend.name}<br /><br /></div>
        })}
        </>
    )
}