import React from 'react'

// User Styling
import '../assets/css/install.css'

// Images
import mount from '../assets/images/50-mount.jpg'
import baseMount from '../assets/images/base-mounted.JPG'
import caseMount from '../assets/images/case-mounted.JPG'



function Installs(props) {

  return (
    <>
    <div>
      <div className="install-container">
        <h1>Professional Installations</h1>
        <div className="install-content-container">
          <h1 className="title-green">New TV, New Look: Professionally Installed</h1>
          <img src={caseMount} alt="BDIT wall mounted TV with surrounding, very happy customer"/>
          <img src={mount} alt="BDIT swivel mount, very happy customer"/>
          <img src={baseMount} alt="BDIT wall mounted TV, very happy customer"/>

          <div>
            <p>If you need your TV installed, our team is ready to go.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/bdit/install">Schedule Install</a>
            <p>Great news! If you buy a TV & mount with us you get a great discount on both the install & the mount.</p>
          </div>

          <div className="install-pricing-container">
            <div>
              <h3>Basic Install - No Mount</h3>
              <p>$99</p>
            </div>
            <div id="pricing-2">
              <h3>Install & Setup - Mount Included</h3>
              <p>$150</p>
            </div>
            <small>*Subtract $20 if your TV is less than 55 <br /> <span>Take 20% off if you buy your TV with US!</span></small>
          </div>
          <div className="install-cta">
            <a arget="_blank" rel="noopener noreferrer" href="https://calendly.com/bdit/install">Schedule Install</a>
          </div>

        </div>
      </div>
    </div>


    </>
  );
}

export default Installs;
