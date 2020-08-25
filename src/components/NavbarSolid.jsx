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

  return (
    <div>
      <div className="navbar-logo">
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"row", alignContent:"center", alignItems:"center"}}>
        <img className="logo" src={logo} alt="BDIT Logo" />
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
        <div className="contact">
          <p>+1 303-593-0581 4371</p>
          <p>S Broadway, Englewood, CO 80113</p>
        </div>
      </div>
      <div className="topnav" id="myTopnav">
        <Link to="/"><p>HOME</p></Link>
        <Link to="/hdtvs"><p>HDTV'S</p></Link>
        <Link to="computers"><p>COMPUTERS</p></Link>
        <Link to="accesories"><p>ACCESORIES</p></Link>
        <Link to="audio"><p>HOME AUDIO</p></Link>
        <Link to="about"><p>ABOUT US</p></Link>
        <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default NavbarSolid;