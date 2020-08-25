import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_COMPUTERS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';

function Computers(props) {
  const { data, mutate } = useSWR(ALL_COMPUTERS, ALL_FETCHER)
  const computers = data && data.computers

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  if(!computers) return <p>Loading</p>
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
            computers.map((e,i)=>{
              return(
              <>
              <div className="card-product" style={{backgroundImage:`url(${e.img})`}}>
                    <h4 className="subtitle-card">{e.title}</h4>
                    <p className="subtitle-card">${e.price}</p>
                    <button className="button-card-blue">RESERVE</button>
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

export default Computers;