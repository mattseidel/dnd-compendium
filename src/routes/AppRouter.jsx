import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ClassesScreen } from '../components/classess/ClassesScreen'
import { ClassesDetailsScreen } from '../components/classess/detalles/ClassesDetailsScreen'
import { EquipmentScreen } from '../components/equipment/EquipmentScreen'
import { MainScreen } from '../components/main/MainScreen'
import { MechanicsScreen } from '../components/mechanics/MechanicsScreen'
import { MonstersScreen } from '../components/monsters/MonstersScreen'
import { RacesScreen } from '../components/races/RacesScreen'
import { RulesScreen } from '../components/rules/RulesScreen'
import { SpellsScreen } from '../components/spells/SpellsScreen'

import { NavbarScreen } from '../components/ui/NavbarScreen'
import '../styles/styles.scss'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarScreen />
            <div className="container" >
                <Switch>
                    <Route exact path='/classes' component={ClassesScreen} />
                    <Route exact path='/classes/:index' component={ClassesDetailsScreen} />
                    <Route exact path='/equipment' component={EquipmentScreen} />
                    <Route exact path='/mechanics' component={MechanicsScreen} />
                    <Route exact path='/monsters' component={MonstersScreen} />
                    <Route exact path='/races' component={RacesScreen} />
                    <Route exact path='/rules' component={RulesScreen} />
                    <Route exact path='/spells' component={SpellsScreen} />
                    <Route exact path='/' component={MainScreen} />

                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
