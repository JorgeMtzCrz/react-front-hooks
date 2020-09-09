import React from 'react';

// USER STYLING
import '../assets/css/home.css'



import {
  Input,
  Button
} from 'reactstrap';


const BannerEmail = (props) => {

  return (
    <>
    <div className="testi-spacer"></div>
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>
            <Button className="banner-button">Click Here</Button>
        </div>
      </div>
      <div className="testi-spacer"></div>
      </>
  );
}

export default BannerEmail;
