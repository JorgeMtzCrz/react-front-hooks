import React from 'react'
import hero from '../assets/images/hero_image.png'

function Hero(props) {

  return (
        <div className="mb-5" style={{display: "flex", width:"100%", height:"580px", backgroundImage:`url(${hero})`}}> 
        </div>
  );
}

export default Hero;