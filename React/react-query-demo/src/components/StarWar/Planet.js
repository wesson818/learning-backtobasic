import React from 'react'

export const Planet = ({planet}) => {
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
    )
}
