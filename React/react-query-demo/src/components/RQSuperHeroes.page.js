import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

const fetchSuperHeroes = () => 
  axios.get('http://localhost:4000/superheroes')

export const RQSuperHeroesPage = () => {
    const [refetchTimes, setRefetchTimes] = useState(0);
    const [intervalTime, setIntervalTime] = useState(2000);
    const onSuccess = data => {
      console.log('onSuccess', data);
      setRefetchTimes(refetchTimes + 1);
      if (refetchTimes >= 3) setIntervalTime(10000);
    }
    const onError = error => {
      console.log('onError', error);
    }
    const {isLoading, data, isError, error, isFetching, refetch} = 
      useQuery('super-heroes', fetchSuperHeroes, {
        enabled: false,
        // need enable: true to make refetchInterval work
        refetchInterval: intervalTime,
        refetchIntervalInBackground: true,
        onSuccess,
        onError,
      })

    if (isLoading || isFetching) <h2>Loading...</h2>

    if (isError) <h2>{error.message}</h2>

    return (
      <>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch Data</button>
        {data?.data.map(hero => {
          return <div key={hero.id}>{hero.name}</div>
        })}
      </>
    )    
}
  