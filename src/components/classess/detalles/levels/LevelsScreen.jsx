import React from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import { Loading } from '../../../ui/Loading'
import { FeaturesScreen } from '../features/FeaturesScreen'
import { TableScreen } from './TableScreen'

export const LevelsScreen = ({ url }) => {
    const [data, loading] = useFetch(`classes/${url}/levels`)

    console.log(data);

    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            <div className="col-12">
                <TableScreen url={url} data={data} loading={loading} />
            </div>
            <div className="col-12">
                <FeaturesScreen data={data} loading={loading} />
            </div>
        </>

    )
}
