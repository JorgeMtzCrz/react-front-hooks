import React from 'react';

import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import altLogo from '../assets/images/altLogo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarSolid = (props) => {


  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// TODO: Make this a clickable/useful

  return (
    <div>
      <div className="navbar-logo">
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"row", alignContent:"center", alignItems:"center"}}>
        <a href="./"> <img className="logo" src={altLogo} alt="BDIT Logo" /> </a>
        <Form>
              <FormGroup className="ml-4 mb-0">
                <InputGroup>
                  <Input id="search-input" className="banner-input" placeholder="What are you looking for?" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText style={{backgroundColor:"white"}}>
                      <FontAwesomeIcon className="search-icon" style={{color:"black"}} icon={faSearch} />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
        </Form>
        </div>
        <div className="contactl">
          <a href="tel:303-593-0581"><div>
            <b>Call Us!</b>
            <p>(303) 593-0581</p>
          </div></a>
          <a href="https://g.page/bestDealDenver?share"><div>
            <b>Come Say Hi!</b>
            <p>4371 S Broadway  <br/>  Englewood, CO 80113</p>
          </div></a>
        </div>
      </div>
      <div className="topnav" id="myTopnav">
      <Link to="about"><p>ABOUT US</p></Link>
        <Link to="/hdtvs"><p>TVS & INSTALL</p></Link>
        <Link to="computers"><p>COMPUTERS</p></Link>
        <Link to="accesories"><p>ACCESORIES</p></Link>
        <Link to="audio"><p>HOME AUDIO</p></Link>
        <Link to="/"><p>HOME</p></Link>
        <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default NavbarSolid;
