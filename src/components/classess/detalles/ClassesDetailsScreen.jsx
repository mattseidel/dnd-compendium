import React from 'react'
import { useFetch } from '../../../hooks/useFetch';
import { Loading } from '../../ui/Loading';
import { ImagesClasses } from '../ImagesClasses';
import { LevelsScreen } from './levels/LevelsScreen';
import { List } from './List';
import { SkillList } from './SkillList';

export const ClassesDetailsScreen = ({ match }) => {
    const [data, loading] = useFetch(`/classes/${match.params.index}`)
    

    if (loading) {
        return <Loading />
    } else {

        return (
            <div className='card mt-2'>
                <div className="row">
                    <div className="col-lg-2 col-md-4 d-none d-md-block">
                        <ImagesClasses url={data.index} />
                    </div>
                    <div className="col-lg-10 col-md-8 ">
                        <h1>{data.name}</h1>
                        <div className="list-group">
                            <List list={data.proficiencies} name='Proeficiencies' />
                            <List list={data.saving_throws} name='Saving throws' />
                            <SkillList skill={data.index !== 'monk' ? data.proficiency_choices[0]:data.proficiency_choices[2] } />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <LevelsScreen url={data.index} />
                </div>
            </div>
        )
    }
}
