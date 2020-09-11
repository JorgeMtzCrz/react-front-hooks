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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import {MyContext} from '../CartContext'
import cartImg from '../assets/icons/cart.svg'

// USER STYLING
import '../assets/css/navbar.css'

// IMAGES
import logo from '../assets/images/logo.png'
import altLogo from '../assets/images/altLogo-1.png'


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
        <div className="navbar-container" >
          <a href="./"> <img className="logo" src={altLogo} alt="BDIT Logo" /> </a>

        <div className="contactl">
            <a href="tel:303-593-0581">
              <div>
                <b>Call Us!</b>
                <p>(303) 593-0581</p>
              </div>
            </a>
            <a href="https://g.page/bestDealDenver?share">
              <div>
                <b>Come Say Hi!</b>
                <p>4371 S Broadway  <br/>  Englewood, CO 80113</p>
              </div>
            </a>
            <Form className="form-content-container">
                  <FormGroup className="">
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
        </div>
      </div>
      <div className="topnav" id="myTopnav">
        <Link to="/about"><p>ABOUT US</p></Link>
        <Link to="/hdtvs"><p>TVS & INSTALL</p></Link>
        <Link to="/computers"><p>COMPUTERS</p></Link>
        <Link to="/accesories"><p>ACCESORIES</p></Link>
        <Link to="/audio"><p>HOME AUDIO</p></Link>
        <Link to="/"><p>HOME</p></Link>
      <MyContext.Consumer>

        {
          ({cart})=>{
            return(
              <Link to="/cart">
                <img style={{marginTop: "8px"}} src={cartImg} alt="cart-icon"/>
                <span><p>{cart.length}</p></span>
              </Link>
            )

          }
        }
      </MyContext.Consumer>

        <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default NavbarSolid;
