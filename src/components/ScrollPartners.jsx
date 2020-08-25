import React from 'react'

import apple from '../assets/images/apple.png'
import sony from '../assets/images/sony.png'
import samsung from '../assets/images/samsung.png'
import sonos from '../assets/images/sonos.png'
import vizio from '../assets/images/vizio.png'
import philips from '../assets/images/philips.png'

const slides = [sony,apple,samsung,vizio,sonos,philips]

function ScrollPartners(props) {


  return (
      
    
        <div className="main-scroll mb-5">
          <h4 className="title-gray">Some of the brands we have for you</h4>
          <div className="container-scroll">
            {slides.map((marcas, i) => (
              <div key={i} className="slider-partners">
                <img src={marcas} alt="marcas" />
              </div>
            ))}
          </div>
          <button className="button-scroll-green">BUY GREEN</button>
        </div>
  );
}

export default ScrollPartners;