import React, {useState} from 'react'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'

export default function Footer(props) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <> 
    <div className="footer-content">
      <div className="footer-column-content">
        <div className="footer-column">
            <h4 className="subtitle-footer">About us</h4>
            <p>About us</p>
            <p>Site map</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Best Deal Denver</h4>
            <p>About us</p>
            <p>Site map</p>
            <p>About us</p>
            <p>Site map</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Customer Service</h4>
            <p>About us</p>
            <p>Site map</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Terms & Conditions</h4>
            <p>About us</p>
            <p>Site map</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Site Admin</h4>
            <p>About us</p>
            <p>Site map</p>
        </div>
      </div>
      <div className="social-column-content">
        <img style={{margin:'0px 30px'}} src={facebook} alt="facebook" />
        <img src={instagram} alt="facebook" />
      </div>
      <div className="copyright-footer">
        <p >Best Deal Denver © 2020. All rights reserved.</p>
      </div>

    </div>
      
    </>
  );
}