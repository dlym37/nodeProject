import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Herbivore from './components/Body/Herbivore'

export default (
    <Switch>
        <Route path='/herbivore' component={Herbivore} />
        </Switch>
)
