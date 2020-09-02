import React from 'react'
import NavbarSolid from './NavbarSolid';
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'



function Accesories(props) {
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

          {({ cart, addToCart, accesories})=>
            !accesories ? <h4>Loading...</h4>:
            accesories.map((e,i)=>{
              return(
              <>
                <div key={i} className="card-product">
                  <img className="product-image" src={stock} alt="computer" />
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

export default Accesories;
