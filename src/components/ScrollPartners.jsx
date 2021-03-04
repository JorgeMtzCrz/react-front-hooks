import React from 'react'

// USER STYLING

// IMAGES
import apple from '../assets/images/apple.png'
import sony from '../assets/images/sony.png'
import samsung from '../assets/images/samsung.png'
import sonos from '../assets/images/sonos.png'
import vizio from '../assets/images/vizio.png'
import philips from '../assets/images/philips.png'
import { Link } from 'react-router-dom'

const slides = [sony,apple,samsung,vizio,sonos,philips]

function ScrollPartners(props) {


  return (


      <div className="main-scroll">
        <h4 className="title-gray">Your Favorite Brands @ Your Favorite Prices</h4>
        <div className="container-scroll">
          {slides.map((marcas, i) => (
            <div key={i} className="slider-partners">
              <img src={marcas} alt="marcas" />
            </div>
          ))}
        </div>
        <Link to="/hdtvs"><button className="button-scroll-green">BUY GREEN</button></Link>
      </div>
  );
}

export default ScrollPartners;
