import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Person } from './Person'

const fetchPeople = async ({queryKey}) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${queryKey[1]}`)
    return res.json()
}

export const People = () => {
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['People', page], fetchPeople)
    console.log('data', data)
    console.log('status', status)

    return (
        <div>
            <h2>Peoples</h2>
            {status === 'loading' && (
                <div>Loading data</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <>
                    <button 
                        onClick={()=>setPage(prevPage => Math.max(prevPage - 1, 1))}
                        disabled={page === 1}
                    >Previous Page</button>
                    <span>{ page }</span>
                    <button 
                        onClick={()=>setPage(prevPage => (!!data.next ? prevPage + 1 : prevPage))}
                        disabled={!data.next}
                    >Next Page</button>
                    <div>{data.results.map(person => <Person key={person.name} person={person} />)}</div>
                </>
            )}
        </div>
    )
}
