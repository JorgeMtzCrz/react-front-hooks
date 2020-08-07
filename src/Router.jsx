import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavbarSolid from './components/NavbarSolid'
import Home from './components/Home'


const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route component={Home} exact path="/" />

    </Switch>
  </BrowserRouter>
)

export default Router