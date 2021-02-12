import React from 'react'

export const SkillList = ({ skill }) => {
    const removeSkillFromName = (skill) => {
        return skill.substr(7, skill.length)
    }
    return (
        <div className='text-muted text__small list-group-item'>
            <b>Choose {skill.choose} skills from: </b>
            {skill.from.map((sk, index) => (
                <span>
                    {removeSkillFromName(sk.name)}{index !== skill.from.length - 1 ? ', ' : '.'}
                </span>
            ))}
        </div>
    )
}
