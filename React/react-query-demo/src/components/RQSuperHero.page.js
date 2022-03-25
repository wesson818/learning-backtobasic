import { useSuperHeroData } from './hooks/useSuperHeroData'
import { useParams } from 'react-router-dom';

export const RQSuperHeroPage = () => {
    const { heroId } = useParams()
    console.log('heroId', heroId)

    const {isLoading, data, isError, error} = useSuperHeroData(heroId);
    console.log('data?.data.id', data?.data.id)

    if (isLoading) <h2>Loading...</h2>

    if (isError) <h2>{error.message}</h2>

  return (
    <>
        <h2>RQ Super Hero page</h2>
        <div key={`${data?.data.id}`}>{data?.data.name} - {data?.data.alterEgo}</div>
    </>
  )
}
