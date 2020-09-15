import React, {useState} from 'react'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'

// User STYLING
import '../assets/css/footer.css'
import { Link } from 'react-router-dom';


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
          <Link to={"/about"}><p>About us</p></Link>  
          <Link><p>Site map</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Best Deal Denver</h4>
            <Link><p>Store</p></Link>
            <Link><p>How to buy?</p></Link>
            <Link><p>Return policy</p></Link>
            <Link><p>Electronic Bill</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Customer Service</h4>
            <Link><p>Contact us</p></Link>
            <Link><p>My Argyle Account</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Legal</h4>
            <Link><p>Privacy Policy</p></Link>
            <Link><p>Legal Terms</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Site Admin</h4>
            <Link><p>Login</p></Link>
            <Link><p>Argyle Admin</p></Link>
            <p> <a href="https://approve.me/s/bestdealintown/29657#/splash">Progressive</a> </p>
            <p> <a href="https://businesscenter.synchronybusiness.com/portal/login">Synchrony</a> </p>
        </div>
      </div>
      <div className="social-column-content">
        <img  className="img-fb" src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="copyright-footer">
        <p>Best Deal Denver © 2020. All rights reserved.</p>
      </div>

    </div>

    </>
  );
}
