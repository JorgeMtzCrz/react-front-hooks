import React, {useState} from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_AUDIO, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'
import { Link } from 'react-router-dom';
import LoadScreen from './Loading'
import {UncontrolledTooltip} from 'reactstrap'


// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import tooltip from '../assets/images/toolquest.svg'


function Audio(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = (id) => setTooltipOpen(!tooltipOpen);
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
    <Footer/>

    </>
  );
}

export default Audio;
