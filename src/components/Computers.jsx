import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_COMPUTERS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'
import { Link } from 'react-router-dom';
import LoadScreen from './loading.jsx';

// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'



function Computers(props) {
  const {data} = useSWR(ALL_COMPUTERS, ALL_FETCHER)
  const computers = data && data.computers
  if(!computers) return <LoadScreen />
  return (
    <>
    <NavbarSolid/>
    <div className="discount-green">
    <p>100% eco-Electronic computers!</p>
    <small>Save the environment, save the wallet</small>
    </div>
    <div className="container-products">
      <div className="side-products"></div>
      <div className="cards-products">
      <MyContext.Consumer>

          {({addToCart})=>
            computers.map((e,i)=>{
              return(
              <>
                <div className="card-product">
                <Link  to={`${e.url}`}><img className="product-image" src={stock} alt="computer" /></Link>
                  <div key={i}  className="product-price-section">
                        <h4 className="subtitle-card">{e.title}</h4>
                        <p className="subtitle-card">${e.price}</p>
                        <button onClick={()=> addToCart(e)} className="button-card-blue">RESERVE</button>
                  </div>
                </div>
              </>
              )
            })
          }
      </MyContext.Consumer>

    </div>
    </div>
    <BannerEmail/>
    <Footer/>

    </>
  );
}

export default Computers;
