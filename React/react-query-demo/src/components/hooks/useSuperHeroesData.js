import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => 
  axios.get('http://localhost:4000/superheroes')

const addSuperHero = hero => 
  axios.post('http://localhost:4000/superheroes', hero)

export const useSuperHeroesData = ( intervalTime, onSuccess, onError ) => 
    useQuery('super-heroes', fetchSuperHeroes, {
        enabled: true,
        // need enable: true to make refetchInterval work
        // refetchInterval: intervalTime,
        // refetchIntervalInBackground: true,
        onSuccess,
        onError,
        // select: data => data?.data?.map(hero => hero.name)
    })

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    // Query Invalidation
    // onSuccess: () => queryClient.invalidateQueries('super-heroes')
    onSuccess: data => {
      // Handling Mutation Response
      queryClient.setQueryData('super-heroes', oldQueryData => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data]
        }
      })
    }
  })
}