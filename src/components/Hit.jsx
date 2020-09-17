import React from 'react'

// USER STYLING
import '../assets/css/aboutus.css'

// IMAGES
import big from '../assets/images/big_stores.png'
import hit from '../assets/images/hit_supliers.png'
import box from '../assets/images/box.png'
import feel from '../assets/images/feel.png'

// ICONS
import one from '../assets/icons/number-1.svg'
import two from '../assets/icons/number-2.svg'
import three from '../assets/icons/number-3.svg'
import four from '../assets/icons/number-4.svg'



function Hit(props) {

  return (
        <div className="mt-5 mb-5 why-section-container">
          <h4 className="title-hit title-blue">Where Your Savings Comes From</h4>
          <div className="mt-5 text-container-hit">

            <div className="mt-5 container-hit">
              <img className="number-hit hit-right" src={one} alt="Img of numerical order: 1"/>
              <img src={big} alt="store " className="mr-5 mobile-hit-icon hit-icons"/> <span className="text-why-black">Big Stores & Manufacturers get a bunch of returned product (mostly unused). They collect all the product and <span className="text-why-green">sell them in BIG quantities.</span></span>
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit " src={two} alt="Img of numerical order: 2"/>
              <img src={hit} className="mobile-hit-icon hit-icons" alt="house" />
              <span className="text-why-black" style={{width:"90%"}}>Our suppliers buy them, <span className="text-why-blue">quality control everything, and sell their best options to us!</span></span>
              <img src={hit} className="hit-icons desktop-hit-icon" alt="house" />
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit hit-right" src={three} alt="Img of numerical order: 3"/>
              <img src={box} alt="box" alt="suppliers" className="mr-5 mobile-hit-icon hit-icons"/> <span className="text-why-black">We get them, do a full quality inspection, add whatever accessories are needed, then pass the savings on to you.</span>
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit" src={four} alt="Img of numerical order: 4"/>
              <img src={feel} alt="feel" className="hit-icons mobile-hit-icon" />
              <span className="text-why-black" style={{width:"90%"}}><span className="text-why-blue">You feel confident in a great quality product & </span><span className="text-why-green">PROUD that you’ve helped protect the environment</span>.</span>
              <img src={feel} alt="feel" className="hit-icons desktop-hit-icon" />
            </div>

          </div>
        </div>
  );
}

export default Hit;
