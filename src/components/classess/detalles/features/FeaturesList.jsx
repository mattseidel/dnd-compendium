import React from 'react'
import { useFetch } from '../../../../hooks/useFetch'

export const FeaturesList = ({ url }) => {
    const [data, loading] = useFetch(`features/${url}`)
    console.log(data);
    return (
        <div id={data.index}>
            <hr/>
            <h3 className="card-title">{data.name}</h3>
            <span className="text-muted">Level: {data.level} </span>
            <p className="card-text">{data.desc}</p>
        </div>
    )
}
