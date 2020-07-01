import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Academics from './Components/Academics'
import Athletics from './Components/Athletics'
import Login from './Components/Login'
import Register from './Components/Register'
import Degrees from './Components/Degrees'
import Roster from './Components/Roster'

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path='/about' />
        <Route component={Degrees} exact path="/degrees" />
        <Route component={Roster} exact path="/athletics" />
        <Route component={Login} path='/login' />
        <Route component={Register} path='/register' />
        <Route component={Academics} path='/degrees/:type' />
        <Route component={Athletics} path='/roster/:sport_name' />
    </Switch>

);