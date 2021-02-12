import React from 'react'
import { Loading } from '../../../ui/Loading'
import { FeaturesList } from './FeaturesList'

export const FeaturesScreen = ({ data, loading }) => {

    if (loading) {
        return <Loading />
    } else {
        return (
            <>
                {data.map(({ features }) => (
                    features.map(({ index }) => (
                        <FeaturesList url={index} />
                    ))
                ))}
            </>
        )
    }
}
