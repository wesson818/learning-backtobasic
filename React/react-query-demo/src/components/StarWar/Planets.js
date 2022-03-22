import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Planet } from './Planet'

export const Planets = () => {
    const fetchPlanets = async ({queryKey}) => {
        console.log('queryKey', queryKey)
        console.log('greeting', queryKey[1].greeting)
        const res = await fetch(`http://swapi.dev/api/planets?page=${queryKey[1].page}`)
        return res.json()
    }
    const [ page, setPage ] = useState(1);
    const { data, status } = useQuery(['planets', {greeting: 'hello star war', page: page}], fetchPlanets);
    // , {
    //     staleTime: 0,
    //     cacheTime: 10,
    //     onSuccess: () => console.log("data fetch no problem")
    // })
    
    console.log('data', data)
    console.log('status', status)

    return (
        <div>
            <h2>Planets</h2>
            <button onClick={()=>setPage(1)}>page 1</button>
            <button onClick={()=>setPage(2)}>page 2</button>
            <button onClick={()=>setPage(3)}>page 3</button>
            {status === 'loading' && (
                <div>Loading data</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                // <div></div>
                <div>{data.results.map(planet => <Planet key={planet.name} planet={planet} />)}</div>
            )}
        </div>
    )
}
