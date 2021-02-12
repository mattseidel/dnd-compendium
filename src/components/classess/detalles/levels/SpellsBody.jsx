import React from 'react'

export const SpellsBody = ({ classes, spellcasting }) => {

    const getSpellBody = () => {
        switch (classes) {
            case 'bard':
            case 'sorcerer':
            case 'cleric':
                return [
                    spellcasting.cantrips_known,
                    spellcasting.spells_known,
                    spellcasting.spell_slots_level_1,
                    spellcasting.spell_slots_level_2,
                    spellcasting.spell_slots_level_3,
                    spellcasting.spell_slots_level_4,
                    spellcasting.spell_slots_level_5,
                    spellcasting.spell_slots_level_6,
                    spellcasting.spell_slots_level_7,
                    spellcasting.spell_slots_level_8,
                    spellcasting.spell_slots_level_9
                ]
            case "druid":
            case "wizard":
                return [
                    spellcasting.cantrips_known,
                    spellcasting.spell_slots_level_1,
                    spellcasting.spell_slots_level_2,
                    spellcasting.spell_slots_level_3,
                    spellcasting.spell_slots_level_4,
                    spellcasting.spell_slots_level_5,
                    spellcasting.spell_slots_level_6,
                    spellcasting.spell_slots_level_7,
                    spellcasting.spell_slots_level_8,
                    spellcasting.spell_slots_level_9
                ]
            case "paladin":
                return [
                    spellcasting.spell_slots_level_1,
                    spellcasting.spell_slots_level_2,
                    spellcasting.spell_slots_level_3,
                    spellcasting.spell_slots_level_4,
                    spellcasting.spell_slots_level_5,
                ]
            case "ranger":
                return [
                    spellcasting.spells_known,
                    spellcasting.spell_slots_level_1,
                    spellcasting.spell_slots_level_2,
                    spellcasting.spell_slots_level_3,
                    spellcasting.spell_slots_level_4,
                    spellcasting.spell_slots_level_5,
                ]
            case "warlock":
                return [
                    spellcasting.cantrips_known,
                    spellcasting.spells_known,
                    spellcasting.spell_slots_level_1 !== 0 ? 1 :
                        spellcasting.spell_slots_level_2 !== 0 ? 2 :
                            spellcasting.spell_slots_level_3 !== 0 ? 3 :
                                spellcasting.spell_slots_level_4 !== 0 ? 4 : 5
                    ,
                ]
            default:
                return []
        }
    }

    return (
        <>
            {getSpellBody().map(body => (
                <td className='text-center'>{body}</td>
            ))}
        </>
    )
}
