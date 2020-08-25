import React, { useState } from 'react';

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
            <p className="banner-text">Receive the best offers and more!</p>
            <Input id="search-input" className="banner-input" placeholder="Write your email here" type="email" />
            <Button className="banner-button">SEND</Button>
            <p className="raya-banner">|</p>
            <div className="banner-sub-section">
              <p className="banner-sub-section-text">Promos</p>
              <Button  >SEE MORE</Button>
            </div>
        </div>
        
        
      </div>
  );
}

export default BannerEmail;