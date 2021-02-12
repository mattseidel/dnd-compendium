import React from 'react'

export const List = ({ list, name }) => {
    return (
        <div className='text-muted text__small list-group-item'>
            <b>{name}: </b>
            {
                list.map((pro, index) =>
                    (<span>{pro.name}{index !== list.length - 1 ? ', ' : '.'}</span>)
                )
            }
        </div>
    )
}
