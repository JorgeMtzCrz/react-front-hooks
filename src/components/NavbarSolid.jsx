import React, { useState } from 'react';

import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';
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
    <div className="mb-5">
      <div style={{display:'flex', padding:"30px", flexWrap:"wrap", justifyContent:"space-between", alignContent:"center", alignItems:"center",height:"100px"}}>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"row", alignContent:"center", alignItems:"center"}}>
        <img height="51px" width="286px" src={logo} alt="BDIT Logo" />
        <Form>
              <FormGroup className="ml-4 mb-0">
                <InputGroup>
                  <Input id="search-input" style={{height:"62px", width:"320px"}} placeholder="What are you looking for?" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText style={{backgroundColor:"white"}}>
                      <FontAwesomeIcon style={{width:"40px", color:"black"}} icon={faSearch} />
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
        <a href="#home">HOME</a>
        <a href="#news">HDTV'S</a>
        <a href="#contact">COMPUTERS</a>
        <a href="#about">ACCESORIES</a>
        <a href="#contact">HOME AUDIO</a>
        <a href="#about">ABOUT US</a>
        <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default NavbarSolid;