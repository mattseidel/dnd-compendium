import React from 'react'
import { getAll } from '../../helpers/http'
import { useFetch } from '../../hooks/useFetch'
import { CardList } from '../Card/CardList'
import { ClassesList } from './ClassesList'

export const ClassesScreen = () => {
    const [data, loading] = useFetch('classes')

    const { results } = data

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }


    return (
        <div>
            <h1>Classes</h1>
            <hr />
            <CardList>
                {
                    results.map(data => (
                        <ClassesList key={data.index} {...data} />
                    ))
                }
            </CardList>
        </div>
    )
}
