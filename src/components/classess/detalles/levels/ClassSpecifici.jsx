import React from 'react'

export const ClassSpecifici = ({ classes, class_specific }) => {


    const getSepecifidBody = () => {
        switch (classes) {
            case 'barbarian':
                return [class_specific.rage_count, `+${class_specific.rage_damage_bonus}`]
            case 'monk':
                return [`${class_specific.martial_arts.dice_count}d${class_specific.martial_arts.dice_value}`, class_specific.ki_points, `+${class_specific.unarmored_movement} ft`]
            case 'rogue':
                return [`${class_specific.sneak_attack.dice_count}d${class_specific.sneak_attack.dice_value}`]
            case "bard":
                return [`1d ${class_specific.bardic_inspiration_die}`, `1d${class_specific.song_of_rest_die}`]
            case "sorcerer":
                return [class_specific.sorcery_points]
            case 'paladin':
                return [`${class_specific.aura_range} ft`]
            default:
                return []
        }
    }

    return (
        <>
            {
                getSepecifidBody().map(body => (
                    <td>{body}</td>
                ))
            }
        </>
    )
}
