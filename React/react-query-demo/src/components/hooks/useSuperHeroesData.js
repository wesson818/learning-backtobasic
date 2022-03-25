import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => 
  axios.get('http://localhost:4000/superheroes')

export const useSuperHeroesData = ( intervalTime, onSuccess, onError ) => 
    useQuery('super-heroes', fetchSuperHeroes, {
        enabled: false,
        // need enable: true to make refetchInterval work
        refetchInterval: intervalTime,
        refetchIntervalInBackground: true,
        onSuccess,
        onError,
        // select: data => data?.data?.map(hero => hero.name)
    })
