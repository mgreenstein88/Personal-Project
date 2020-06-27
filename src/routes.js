import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Academics from './Components/Academics'
import Athletics from './Components/Athletics'
import Login from './Components/Login'
import Register from './Components/Register'

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path='/about' />
        <Route component={Academics} path="/academics" />
        <Route component={Athletics} path="/athletics" />
        <Route component={Login} path='/login' />
        <Route component={Register} path='/register' />
    </Switch>

);