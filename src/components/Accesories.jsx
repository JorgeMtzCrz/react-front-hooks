import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_ACCESORIES, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'



function Accesories(props) {
  const { data, mutate } = useSWR(ALL_ACCESORIES, ALL_FETCHER)
  const accesories = data && data.accesories

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  if(!accesories) return <p>Loading</p>
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
          {
            accesories.map((e,i)=>{
              return(
              <>
                <div className="card-product">
                  <img className="product-image" src={stock} alt="computer" />
                  <div className="product-price-section">
                        <h4 className="subtitle-card">{e.title}</h4>
                        <p className="subtitle-card">${e.price}</p>
                        <button className="button-card-blue">RESERVE</button>
                  </div>
                </div>
              </>
              )
            })
          }


      </div>
    </div>
    <BannerEmail/>
    <Footer/>

    </>
  );
}

export default Accesories;
