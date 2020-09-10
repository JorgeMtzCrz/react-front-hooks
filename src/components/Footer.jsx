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
            <p>Store</p>
            <p>How to buy?</p>
            <p>Return policy</p>
            <p>Electronic Bill</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Customer Service</h4>
            <p>Contact us</p>
            <p>My Argyle Account</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Legal</h4>
            <p>Privacy Policy</p>
            <p>Legal Terms</p>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Site Admin</h4>
            <p>Login</p>
            <p>Argyle Admin</p>
            <p> <a href="https://approve.me/s/bestdealintown/29657#/splash">Progressive</a> </p>
            <p> <a href="https://businesscenter.synchronybusiness.com/portal/login">Synchrony</a> </p>
        </div>
      </div>
      <div className="social-column-content">
        <img  className="img-fb" src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="copyright-footer">
        <p >Best Deal Denver © 2020. All rights reserved.</p>
      </div>

    </div>

    </>
  );
}
