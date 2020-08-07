import React, {useState} from 'react'

import background from "../assets/images/three-hdtv.png"


function OfferSection(props) {
  return (
    <> 
    <div className="offerSection">
      <div className="image-offer">
        <img src={background} alt="hdtv"/>
      </div>
      <div className="color-offer">
      </div>
      <div className="text-offer">
        <p className="title-offer">HDTV'S</p>
        <p className="subtitle-offer">SAVE UP TO 30%</p>
        <button className="button-offer">SEE MORE</button>
      </div>
    </div>
      
    </>
  );
}

export default OfferSection;