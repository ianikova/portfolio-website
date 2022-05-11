import React from 'react'
import Home from './pages/Home'
import {Switch, Route} from 'react-router-dom'

const Router = () => {
    return (
        <Switch>
           <Route path='/' component={Home}/>
        </Switch>
    )
}

export default Router