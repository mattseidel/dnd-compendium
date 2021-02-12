import React from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import { Loading } from '../../../ui/Loading'
import { ClassSpecificHead } from './ClassSpecificHead'
import { ClassSpecifici } from './ClassSpecifici'
import { SpellCastingHead } from './SpellCastingHead'
import { SpellsBody } from './SpellsBody'

export const TableScreen = ({ data, loading, url }) => {

    if (loading) {
        return (<Loading />)
    }
    return (
        <div class="table-responsive">

            <table class="table table-hover table-condensed" style={{ overflowX: 'scroll', maxWidth: '100%' }}>
                <thead>
                    <tr>
                        <th scope="col">Level</th>
                        <th scope="col">Proeficiency bonus</th>
                        <th scope="col">Features</th>
                        <ClassSpecificHead classes={url} />
                        <SpellCastingHead classes={url} />
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(level => (
                            <>
                                {level.prof_bonus &&
                                    <tr>
                                        <th scope="row">{level.level}</th>
                                        <td>+{level.prof_bonus}</td>
                                        <td>
                                            {level.features.length !== 0 ?
                                                level.features.map((feat, index) => (
                                                    <>
                                                        <a href={`#${feat.index}`}>
                                                            <span>{feat.name}</span>
                                                        </a>    {index !== level.features.length - 1 && ', '}
                                                    </>
                                                ))
                                                : '___'
                                            }

                                        </td>
                                        <ClassSpecifici classes={url} class_specific={level.class_specific} />
                                        <SpellsBody classes={url} spellcasting={level.spellcasting} />
                                    </tr>
                                }
                            </>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
