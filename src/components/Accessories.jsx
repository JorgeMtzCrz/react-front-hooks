import React from 'react';
import useSWR from 'swr';
import { ALL_ACCESSORIES, ALL_FETCHER } from '../services/products_service';
import NavbarSolid from './NavbarSolid';
import Footer from './Footer'
import BannerEmail from './BannerEmail'
import {MyContext} from '../CartContext'
import { Link } from 'react-router-dom'
import LoadScreen from './Loading'


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'



function Accessories(props) {
  const { data } = useSWR(ALL_ACCESSORIES, ALL_FETCHER)
  const accessories = data && data.accessories
  if(!accessories) return <LoadScreen />
  return (
    <>
    <NavbarSolid/>

    <div className="container-products">
      <div className="side-products"></div>

      <div className="cards-products">
      <MyContext.Consumer>

          {({ cart, addToCart, accesories})=>
            !accesories ? <h4>Loading...</h4>:
            accesories.map((e,i)=>{
              return(
              <>
                <div key={i} className="card-product">
                <Link  to={`${e.url}`}><img className="product-image" src={stock} alt="computer" /></Link>
                  <div className="product-price-section">
                        <h4 className="subtitle-card">{e.title}</h4>
                        <p className="subtitle-card">${e.price}</p>
                        <button className="button-card-blue" onClick={()=> addToCart(e)}>RESERVE</button>
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

export default Accessories;
