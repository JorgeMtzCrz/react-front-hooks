import React, { useState } from 'react';

// USER STYLING
import '../assets/css/home.css'



import {
  Input,
  Button,
  Divider
} from 'reactstrap';
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const BannerEmail = (props) => {

  return (
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>
            <Input id="search-input" className="banner-input" placeholder="Email" type="email" size="100" />
            <Button className="banner-button">SEND</Button>
        </div>


      </div>
  );
}

export default BannerEmail;
