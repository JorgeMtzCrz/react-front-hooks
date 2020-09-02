import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_COMPUTERS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'

// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'



function Computers(props) {
  const {data} = useSWR(ALL_COMPUTERS, ALL_FETCHER)
  const computers = data && data.computers
  if(!computers) return <h4>Loading...</h4>
  return (
    <>
    <NavbarSolid/>
    <div className="discount-green">
    <p>-50% OFF in all store!</p>
    <p>SHOP NOW!</p>
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
                  <img className="product-image" src={stock} alt="computer" />
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
