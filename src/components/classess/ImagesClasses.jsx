import React from 'react'
export const ImagesClasses = ({ url }) => {

    
    return (
        <div>
            <img src={`/assest/${url}.png`} alt={url} className='image-fluid' height='200' />
        </div>
    )
}
