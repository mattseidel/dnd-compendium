import React from 'react'
import { Link } from 'react-router-dom'
import { ImagesClasses } from './ImagesClasses'

export const ClassesList = ({ name, index }) => {
    return (
        <div className='card classes__card' >
            <Link to={`/classes/${index}`}>
                <h1>
                    {name}
                </h1>
                <ImagesClasses url={name} />
            </Link>
        </div>
    )
}
