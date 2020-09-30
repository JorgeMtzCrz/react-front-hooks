import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_AUDIO, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'
import { Link } from 'react-router-dom';
import LoadScreen from './Loading'


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'


function Audio(props) {
  const { data } = useSWR(ALL_AUDIO, ALL_FETCHER)
  const audio = data && data.audio
  if(!audio) return <LoadScreen />
  return (
    <>
    <NavbarSolid/>
    <div className="container-products">
      <div className="side-products"></div>
      <div className="cards-products">
      <MyContext.Consumer>

          {({addToCart})=>
            audio.map((e,i)=>{
              return(
              <>
                <div key={i} className="card-product card-product-no-banner">
                <Link  to={`${e.url}`}><img className="product-image" src={stock} alt="computer" /></Link>
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
    <Footer/>

    </>
  );
}

export default Audio;
