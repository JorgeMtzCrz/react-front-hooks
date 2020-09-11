import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';

// User Styling
import '../assets/css/paymentOps.css';

// IMAGES


function PaymentsOps(props) {

  return (
    <>
    <NavbarSolid/>

    <div class="inner-container main">
      <div class="inner-container-content">
        <h6>Practical Tips & Tricks to get the most out of YOUR tech</h6>
        <h1 className="title-green title-h1">BDIT BLOG</h1>

        <br />
        <br />

      <h3>Check Out Some of Our Work Below</h3>
        <p><a target="_blank" href="https://bddblog.netlify.app">CLICK HERE</a> to see all of our posts!</p>
      <div className="blog-exs-container">
        <div className="blog-ex">
          example 1
        </div>
        <div className="blog-ex">
          example 2
        </div>
        <div className="blog-ex">
          example 3
        </div>
        <div className="blog-ex">
          example 4
        </div>
      </div>

        <div class="clearfix footer_margin"></div>
          <br />
        <br />

      </div>
    </div>

    <Footer />

    </>
  );
}

export default PaymentsOps;
