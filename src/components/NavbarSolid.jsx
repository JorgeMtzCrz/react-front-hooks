import React, {useState, useEffect} from 'react';
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
import axios from 'axios'


// USER STYLING
import '../assets/css/navbar.css'

// IMAGES
import logo from '../assets/images/logo.png'
import altLogo from '../assets/images/bdit-logo.png'


const NavbarSolid = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function handleSearch (event) {
    setSearchTerm(event.target.value)
    
  }
  useEffect(() => {
    axios.get(`https://bditapp.herokuapp.com/product/search?title=${searchTerm}`)
      .then(({data: {products}})=>{
        setProducts(products)
      })
      .catch(err=> console.log(err))
  }, [searchTerm,  setProducts]);

  return (
    <div>
      <div className="navbar-logo">
        <div className="navbar-container" >
          <Link to="/"> <img className="logo" src={altLogo} alt="BDIT Logo" /></Link>

        <div className="contactl">
            <a href="tel:303-593-0581">
              <div>
                <b>Call Us!</b>
                <p>(303) 593-0581</p>
              </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://g.page/bestDealDenver?share">
              <div>
                <b>Come Say Hi!</b>
                <p>4371 S Broadway  <br/>  Englewood, CO 80113</p>
              </div>
            </a>
            <Form className="form-content-container">
                  <FormGroup className="">
                    <InputGroup>
                      <Input onChange={handleSearch} value={searchTerm} id="search-inputs" className="banner-input" placeholder="What are you looking for?" type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText style={{backgroundColor:"white"}}>
                          <FontAwesomeIcon className="search-icon" style={{color:"black"}} icon={faSearch} />
                        </InputGroupText>
                      </InputGroupAddon>
                      
                    </InputGroup>
                    <ul className="search-div">
                            { products.map((e,i)=>{
                              return(
                               searchTerm === ''? null : 
                              <Link  to={`${e.url}`}><li className="search-li">{e.title}</li></Link> 
                              )
                            })}
                    </ul>
                  </FormGroup>
            </Form>
            

            <MyContext.Consumer>

              {
                ({cart})=>{
                  return(
                    <Link className="cartIcon" to="/cart">
                      <img style={{display:'inline', marginTop: "2px", gridRow:"1/3"}} src={cartImg} alt="cart-icon"/>
                      <span><span>{cart.length}</span></span>
                    </Link>
                  )

                }
              }
            </MyContext.Consumer>
          </div>
        </div>
      </div>
      <div className="topnav" id="myTopnav">
        <Link to="/about"><p>ABOUT US</p></Link>
        <Link to="/hdtvs"><p>TVS & INSTALLS</p></Link>
        <Link to="/computers"><p>COMPUTERS</p></Link>
        <Link to="/accessories"><p>ACCESSORIES</p></Link>
        <Link to="/audio"><p>HOME AUDIO</p></Link>
        <Link to="/payment-options"><p>PAYMENT SOLUTIONS</p></Link>
        <Link to="/blog"><p>BLOG</p></Link>
        <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default NavbarSolid;
