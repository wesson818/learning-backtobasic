import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = ({queryKey}) => {
  console.log('queryKey', queryKey)
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHeroData = id => {
  const queryClint = useQueryClient()
  return useQuery(['super-hero', id], fetchSuperHero, {
    initialData: () => {
      const hero = queryClint.getQueryData('super-heroes')
                    ?.data?.find(hero => hero.id === parseInt(id))
      if (hero) {
        return { data: hero }
      }
      return undefined

    }
  })
}
