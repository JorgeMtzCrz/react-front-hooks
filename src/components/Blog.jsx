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
    <h4>Pay Over Time</h4>
    <h1 className="title-green title-h1">Financing & Leasing Options</h1>

      <br />
      <hr />
      <br />

    <h3>We now offer 2 payment options for our customers</h3>
      <div>
        <img className="paymentOps-imgs" src="../assets/images/synch-logo.png"/>
        <li>Credit Focused - <small>focuses on using your credit history to determine approval</small></li>
        <img className="paymentOps-imgs" src="../assets/images/prog-logo.png"/>
        <li>Income Focused - <small>focuses on consistent income and good standing with your bank</small></li>
      </div>

    <span>
      You must apply for Synchrony in store and you can get more info about the Synchrony credit based option in store or by calling 303-593-0581.
    </span>

    <br />
    <br />

  <p>For Progressive Leasing's&nbsp;Payment Option, you only need a few things to apply!</p>

  <p><b>What is the process? How do I get started with a lease-purchase option today?</b></p>

  <div className="prog-process">
    <ol>
    </ol>
  </div>

  <p>By the way, it’s totally free to apply. </p>
  <a href="https://approve.me/s/bestdealintown/29657#/splash">APPLY NOW</a>

  <hr />

<div className="pay-faqs">
<h3>Common FAQs</h3>
</div>

<br />

  <div align="center">
    <p>Click the IMAGE BELOW to get approved today.</p>
    <br />
    <a href="https://approve.me/s/bestdealintown/29657#/splash"><img src="https://bestdealdenver.com/image/data/PL_Square.png" /></a></div>
    </div>
  <div class="clearfix footer_margin"></div>
    <br />
  <br />
  </div>

    <Footer/>

    </>
  );
}

export default PaymentsOps;
