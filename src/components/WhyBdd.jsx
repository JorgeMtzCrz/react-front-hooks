import React from 'react'

// USER STYLING
import '../assets/css/aboutus.css'

// IMAGES
import hero from '../assets/images/in-store-copy.png'


function Why(props) {

  return (
    <>
      <img className="aboutus-hero" src={hero} alt="Image of the front of the store" />
        <div className="mb-5 why-section-container">
          <span>Why We're The</span><h1 className="title-green">#1 eco-Electronics Store In Denver</h1>
          <div className="mt-5 text-container-why">
            <span className="text-why-black">We got started because we saw a problem: We need <span className="text-why-blue">good quality electronics</span>, but the <span className="text-why-green">BIG companies are focused more on profit than value.</span></span>
            <span className="mt-5 text-why-black">So, we decided to specialize in like new electronics for 2 reasons:</span>
            <div className="mt-5 container-why">
              <span className=" circle-blue">1</span><span className="ml-4 text-why-black"><span className="text-why-blue">Focus on VALUE</span>, which means great quality + great pricing for you</span>
            </div>
            <div className="mt-5 container-why">
                <span className=" circle-green">2</span><span className="ml-4 text-why-blue">Focus on ENVIRONMENT, <span className="text-why-black"> we could<span className="text-why-green"> reduce e-waste by 80% </span>if we ALL bought second hand electronics</span></span>
            </div>
          </div>
        </div>
    </>
  );
}

export default Why;
