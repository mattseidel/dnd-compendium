import React from 'react'

export const SpellCastingHead = ({ classes }) => {

    const getSpellCastingHead = () => {
        switch (classes) {
            case 'bard':
            case 'sorcerer':
            case 'cleric':
                return [
                    'Cantrips Known',
                    'Spells Known',
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th',
                    '6th',
                    '7th',
                    '8th',
                    '9th']
            case "druid":
            case "wizard":
                return [
                    'Cantrips Known',
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th',
                    '6th',
                    '7th',
                    '8th',
                    '9th',
                ]
            case 'warlock':
                return [
                    'Cantrips Known',
                    'Spells Known',
                    'Slot Level',
                ];
            case "paladin":
                return [
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th',
                ]
            case "ranger":
                return [
                    'Spells Known',
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th',
                ]
            default:
                return []
        }
    }

    return (
        <>
            {getSpellCastingHead().map(data => (
                <th className='text__small'>{data}</th>
            ))}
        </>
    )
}
