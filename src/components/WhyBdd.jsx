import React from 'react'

// USER STYLING
import '../assets/css/aboutus.css'

// IMAGES
import hero from '../assets/images/in-store-copy.png'


function Why(props) {

  return (
    <>
      <img className="aboutus-hero" src={hero} alt="wall to wall with macbook pros, iMacs, and samsung TVs and Vizio TVs" />
        <div className="mb-5 why-section-container">
          <span>Why We're The</span><h1 className="title-hit title-green">#1 eco-Electronics Store In Denver</h1>
          <div className="mt-5 text-container-why">
            <span className="text-why text-why-black">We got started because we saw a problem: We needed <span className="text-why-blue">good quality electronics</span>, but the <span className="text-why-green">BIG companies were focused more on profit than value.</span></span>
            <span className="mt-5 text-why-black">We decided to approach it differently:</span>
            <div className="mt-5 container-why">
              <span className=" circle-green">1</span><span className="ml-4 text-why-blue text-why">Focus on ENVIRONMENT, <span className="text-why text-why-black"> we could<span className="text-why-green"> reduce e-waste by 80% </span>if we ALL bought refurbished electronics</span></span>
            </div>
            <div className="mt-5 container-why">
              <span className=" circle-blue">2</span><span className="ml-4 text-why-black"><span className="text-why-blue text-why">Focus on VALUE</span>, which means great quality + great pricing for you</span>
            </div>

          </div>
        </div>
    </>
  );
}

export default Why;
