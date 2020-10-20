import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Hdtvs from './components/Hdtvs'
import Computers from './components/Computers'
import Accessories from './components/Accessories'
import Audio from './components/Audio'
import AboutUs from './components/AboutUs'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import PaymentsOps from './components/PaymentsOps'
import Blog from './components/Blog'
import ReturnPolicy from './components/ReturnPolicy'
import LegalTerms from './components/LegalTerms'
import PrivacyPolicy from './components/PrivacyPolicy'
import ScrollTop from './ScrollTop'

const Router = () => (
  <BrowserRouter>
  <ScrollTop>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Hdtvs} exact path="/hdtvs"/>
      <Route component={Computers} exact path="/computers"/>
      <Route component={Accessories} exact path="/accessories"/>
      <Route component={Audio} exact path="/audio"/>
      <Route component={AboutUs} exact path="/about"/>
      <Route component={ProductDetail} exact path="/hdtvs/:id" />
      <Route component={ProductDetail} exact path="/audio/:id" />
      <Route component={ProductDetail} exact path="/computers/:id" />
      <Route component={ProductDetail} exact path="/accessories/:id" />
      <Route component={Cart} exact path="/cart"/>
      <Route component={PaymentsOps} exact path="/payment-options"/>
      <Route component={Blog} exact path="/blog"/>
      <Route component={ReturnPolicy} exact path="/return-policy"/>
      <Route component={LegalTerms} exact path="/legal-terms"/>
      <Route component={PrivacyPolicy} exact path="/privacy-policy"/>
    </Switch>
  </ScrollTop>
  </BrowserRouter>
)

export default Router
