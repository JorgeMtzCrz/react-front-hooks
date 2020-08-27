import React from 'react'
import hero from '../assets/images/store_front.jpg'
import '../assets/css/aboutus.css'

function Hero(props) {

  return (
        <div className="mb-5 about-hero" style={{width:"100%", height:"400px", backgroundImage:`url(${hero})`}}>
        </div>
  );
}

export default Hero;
