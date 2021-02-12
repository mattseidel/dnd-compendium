import React from 'react'

export const ClassSpecificHead = ({ classes }) => {

    const getHeadClasses = () => {
        switch (classes) {
            case 'barbarian':
                return ['Rage', "Rage damage"]
            case 'monk':
                return ['Martial arts', 'Ki points', 'Unarmed Movement']
            case "rogue":
                return ['Sneak attack']
            case "bard":
                return ['Bardic inspiration', 'Song of rest']
            case 'sorcerer':
                return ['Sorcery Points']
            case 'paladin':
                return ['Aura range']
            default:
                return []
        }
    }
    return (
        <>
            {getHeadClasses().map(head => (
                <th scope='col'>{head}</th>
            ))}
        </>
    )
}
