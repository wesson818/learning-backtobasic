import { useState } from 'react'
import { useSuperHeroesData } from './hooks/useSuperHeroesData'
import { Link } from 'react-router-dom';

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
    useSuperHeroesData( intervalTime, onSuccess, onError);

    if (isLoading || isFetching) <h2>Loading...</h2>

    if (isError) <h2>{error.message}</h2>

    return (
      <>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch Data</button><br /><br />
        {data?.data.map(hero => {
          return <Link key={`${hero.id}`} to={`/rq-super-heroes/${hero.id}`}>{hero.name}<br /><br /></Link>
        })}
        {/* {data?.map(heroName => {
          return <div key={heroName}>{heroName}</div>
        })} */}
      </>
    )    
}
  