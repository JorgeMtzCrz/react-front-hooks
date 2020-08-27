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
          <h4 className="title-blue">Here’s how it works</h4>
          <div className="mt-5 text-container-hit">

            <div className="mt-5 container-hit">
              <img className="number-hit hit-right" src={one} alt="Img of numerical order: 1"/>
              <img src={big} alt="big" width="175px" height="175px" className="mr-5"/> <span className="text-why-black">Big Stores & Manufacturers get a bunch of returned product (mostly unused). They collect all the product and <span className="text-why-green">sell them in BIG quantities.</span></span>
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit " src={two} alt="Img of numerical order: 2"/>
              <span className="text-why-black" style={{width:"90%"}}>Our suppliers buy them, <span className="text-why-blue">quality control everything, and sell their best options to us!</span></span>
              <img src={hit} alt="hit" width="152px" height="152px" />
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit hit-right" src={three} alt="Img of numerical order: 3"/>
              <img src={box} alt="box" width="210px" height="144px" className="mr-5"/> <span className="text-why-black">We get them <span className="text-why-green">all preboxed and ready to go.</span> BUT we do a full quality inspection also we add whatever accessories are needed, and then pass on the savings to you.</span>
            </div>
            <div className="mt-5 container-hit">
              <img className="number-hit" src={four} alt="Img of numerical order: 4"/>
              <span className="text-why-black" style={{width:"90%"}}><span className="text-why-blue">You get to feel proud that you’ve help protect the environment </span>& confident in great quality product.</span>
              <img src={feel} alt="feel" width="140px" height="140px" />
            </div>

          </div>
        </div>
  );
}

export default Hit;
