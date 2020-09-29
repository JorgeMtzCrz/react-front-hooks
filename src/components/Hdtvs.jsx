import React, {useState} from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_HDTVS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {UncontrolledTooltip} from 'reactstrap'
import Installs from './Installs';
import LoadScreen from './Loading';

import {MyContext} from '../CartContext'
import tooltip from '../assets/images/toolquest.svg'

// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import { Link } from 'react-router-dom';



function Hdtvs(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = (id) => setTooltipOpen(!tooltipOpen);
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
                <div key={e._id}  className="card-product">
                <Link  to={`${e.url}`}> <img width="300px" height="250px" src={e.img} alt="hdtvs" /></Link>
                  <div  className="product-price-section">
                    <h4 className="subtitle-card">{e.title}</h4>
                    <p className="subtitle-card">${e.price}</p>
                    <div className="tooltip-content">
                    <button onClick={()=> addToCart(e)} className="button-card-blue">RESERVE</button>
                    <img style={{margin:'10px'}} width="25px" src={tooltip} alt={"tooltip-src"+e._id} id={`tooltip`} />
                    </div>
                    <UncontrolledTooltip placement="bottom" isOpen={tooltipOpen} target={`tooltip`} toggle={toggle}>
                    Reserve your product, come to the store, pay and pick them up. Or choose a delivery date and time and pay when you receive them.  We will soon have an online payment solution that avoids fraud.
                    </UncontrolledTooltip>
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
