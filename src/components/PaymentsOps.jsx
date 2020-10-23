import React from 'react'
import NavbarSolid from './NavbarSolid'
import BannerEmail from './BannerEmail'
import Footer from './Footer'

// User Styling
import '../assets/css/paymentOps.css'

// IMAGES
import synch from '../assets/images/synch-logo.png'
import prog from '../assets/images/prog-logo.png'


function PaymentsOps(props) {

  return (
    <>
    <NavbarSolid/>

<div className="inner-container main">
  <div className="inner-container-content">
    <h4>Pay Over Time</h4>
    <h1 className="title-green title-h1">Financing & Leasing Options</h1>

      <br />
      <hr />
      <br />

    <h3>We now offer 2 payment options for our customers</h3>
      <div className="pay-partners-logos">

        <div>
          <p>Credit Focused - <small>focuses on using your credit history to determine approval</small></p>
          <img className="paymentOps-imgs" src={synch} alt="credit-focused-img" />
          <p>You must apply for Synchrony in store and you can get more info about the Synchrony credit based option in store or by calling 303-593-0581.</p>
        </div>
        <div>
          <p>Income Focused - <small>focuses on consistent income and good standing with your bank</small></p>
          <img className="paymentOps-imgs" src={prog} alt="income-focused-img"/>
        </div>

      </div>


    <br />
    <br />

  <p>For Progressive Leasing's&nbsp;Payment Option, you only need a few things to apply!</p>

  <h3><b>What is the process?</b></h3> <h4>How do I get started with a lease-purchase option today?</h4>

  <div className="prog-process">
    <ol>
      <li>Apply Online at home or In Store. <a target="_blank" rel="noopener noreferrer" href="https://approve.me/s/bestdealintown/29657#/splash">CLICK HERE</a> to get started </li>
      <li>When approved, choose your products</li>
      <li>Review, sign your lease, and make the initial payment ~$55 </li>
      <li>Take your products with you or schedule a time for delivery!! </li>
    </ol>
  </div>

  <p>By the way, it’s totally free to apply. </p>
  <a id="approval-btn" target="_blank" rel="noopener noreferrer" href="https://approve.me/s/bestdealintown/29657#/splash">APPLY NOW</a>

  <br />
  <br />
  <br />

  <hr />

  <br />

<div className="pay-faqs">
<h3>Common FAQs</h3>
  <ol>
    <li><p><b>What do I need to apply?</b></p></li>
      <p>Progressive makes it pretty easy to apply, but there are a few requirements:</p>
      <ul>
        <li>You must be 18 years or older</li>
        <li>Have a valid Social Security Number or ITIN</li>
        <li>Have your routing & account numbers to your active checking account</li>
        <li>Have a credit or debit card</li>
      </ul>
      <br />
    <li><p><b>What If I get denied or the decision comes back as unavaialbe?</b></p></li>
      <p>Give us a call at the store, we can work with Progressive Leasing to see if there are any other options we can explore to change that decision! (303) 593-0581</p>
    <li><p><b>Do you charge an application fee or any other up-front fee?</b></p></li>
        <p>No, we do not charge an application fee or processing fee. Your initial payment will be withdrawn from your credit or debit card immediately after the lease is executed.</p>
    <li><p><b>Do I have the option of buying the product before my lease term ends?</b></p></li>
      <p>Yes. You can purchase the product at any time. You can take advantage of a 90-day purchase option (3-month purchase option in CA) provided in your lease agreement. This is the least expensive option to purchase and expires 90 days (3 months in CA) after your merchandise is delivered. Afer this option expires, you can still utilize the Early Purchase Option which is available throughout the term of the lease</p>
    <li><p><b>What if I plan to pay off my lease later?</b></p></li>
      <p>Even if you intend to purchase later, regular lease payments need to be made. Remember you are leasing the merchandise you selected until you make all payments or choose an early purchase option.</p>

  </ol>
</div>

<br />

  <div align="center">
    <p>Click the IMAGE BELOW to get approved today.</p>
    <br />
    <a target="_blank" rel="noopener noreferrer" href="https://approve.me/s/bestdealintown/29657#/splash"><img alt="best-deal-img-square" src="https://bestdealdenver.com/image/data/PL_Square.png" /></a></div>
    </div>
  <div className="clearfix footer_margin"></div>
    <br />
  <br />
  </div>

    <Footer/>

    </>
  );
}

export default PaymentsOps;
