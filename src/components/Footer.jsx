import React from 'react'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import Swal from 'sweetalert2'

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

  const openContactUs = () =>{
    Swal.fire({
      title: '<strong>Contact Us</strong>',
      html:
        '<a href="mailto:best.deal.in.denver@gmail.com">Email: best.deal.in.denver@gmail.com</a> '+
        '<br/>'+
        '<a href="tel:303-593-0581">Phone: 303 593 0581</a> ',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        ' Ok!',
    })
  }

  return (
    <>
    <div className="footer-content">
      <div className="footer-column-content">
        <div className="footer-column">
            <h4 className="subtitle-footer">About us</h4>
          <Link to={"/about"}><p>About us</p></Link>  
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Best Deal Denver</h4>
            <Link to="#"><p>Store</p></Link>
            <Link to="#"><p>How to buy?</p></Link>
            <Link to="return-policy"><p>Return policy</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Customer Service</h4>
            <span className="span-a" style={{cursor:'pointer'}} onClick={openContactUs}><p>Contact us</p></span>
            <Link to="//payment.roverpayapp.com/" target="_blank"><p>My Argyle Account</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Legal</h4>
            <Link to="privacy-policy"><p>Privacy Policy</p></Link>
            <Link to="legal-terms"><p>Legal Terms</p></Link>
        </div>
        <div className="footer-column">
            <h4 className="subtitle-footer">Site Admin</h4>
            <Link to="//admin.bditdenver.com" target="_blank"><p>Login</p></Link>
            <Link to="//manager.roverpayapp.com/login" target="_blank"><p>Argyle Admin</p></Link>
            <Link to="//approve.me/s/bestdealintown/29657#/splash" target="_blank"><p>Progressive</p></Link>
            <Link to="//businesscenter.synchronybusiness.com/portal/login" target="_blank"><p>Synchrony</p></Link>
        </div>
      </div>
      <div className="social-column-content">
       <Link to="//facebook.com/DenverHDTV" target="_blank"><img  className="img-fb" src={facebook} alt="facebook" /></Link>
        <Link to="//instagram.com/bestdealdenver" target="_blank"><img src={instagram} alt="instagram" /></Link>
      </div>
      <div className="copyright-footer">
        <p>Best Deal Denver © 2020. All rights reserved.</p>
      </div>

    </div>

    </>
  );
}
