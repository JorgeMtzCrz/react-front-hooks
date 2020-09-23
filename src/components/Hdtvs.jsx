import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_HDTVS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';

import Installs from './Installs';
import LoadScreen from './Loading';

import {MyContext} from '../CartContext'


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'
import { Link } from 'react-router-dom';



function Hdtvs(props) {
  const { data } = useSWR(ALL_HDTVS, ALL_FETCHER)
  const hdtvs = data && data.hdtvs
  if(!hdtvs) return <LoadScreen />
  return (
    <>
    <NavbarSolid/>
    <div className="discount-green">
    <p>100% eco-Electronic TVs!</p>
    <small>Save the environment, save the wallet</small>
    </div>
    <div className="container-products">
      <div className="side-products"></div>
      <div className="cards-products">
      <MyContext.Consumer>

          {({addToCart})=>
            hdtvs.map((e,i)=>{
              return(
              <>
                <div key={e._id} className="card-product">
                <Link  to={`${e.url}`}> <img className="product-image" src={stock} alt="computer" /></Link>
                  <div className="product-price-section">
                    <h4 className="subtitle-card">{e.title}</h4>
                    <p className="subtitle-card">${e.price}</p>
                    {/*<button onClick={()=> addToCart(e)} className="button-card-blue">RESERVE</button>*/}
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
    <Installs/>
    <Footer/>

    </>
  );
}

export default Hdtvs;
