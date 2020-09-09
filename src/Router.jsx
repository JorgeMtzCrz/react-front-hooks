import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Hdtvs from './components/Hdtvs'
import Computers from './components/Computers'
import Accesories from './components/Accesories'
import Audio from './components/Audio'
import AboutUs from './components/AboutUs'
import PaymentsOps from './components/PaymentsOps'

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route component={Home} exact path="/" />
      <Route component={Hdtvs} exact path="/hdtvs"/>
      <Route component={Computers} exact path="/computers"/>
      <Route component={Accesories} exact path="/accesories"/>
      <Route component={Audio} exact path="/audio"/>
      <Route component={AboutUs} exact path="/about"/>
      <Route component={PaymentsOps} exact path="/payment-options"/>
    </Switch>
  </BrowserRouter>
)

export default Router
