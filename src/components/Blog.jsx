
import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';

// User Styling
import '../assets/css/blog.css';

// IMAGES
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'



function PaymentsOps(props) {

  return (
    <>
    <NavbarSolid/>

    <div className="inner-container main">
      <div className="inner-container-content">
        <h6>Practical Tips & Tricks to get the most out of YOUR tech</h6>
        <h1 className="title-green title-h1">Tips & Tricks | BDIT BLOG</h1>

        <br />
        <br />

      <h3>Check Out Some of Our Work Below</h3>
        <p><a target="_blank" rel="noopener noreferrer" href="https://bddblog.netlify.app">CLICK HERE</a> to see all of our posts!</p>
      <div className="blog-exs-container">
        <a href="https://bddblog.netlify.app/pages/tips-tricks.html#tt-090820">
          <div className="blog-ex">
            <img src={blog1} alt="blog-img"  />
            <h1>Shortcuts To Success (for computers)</h1>
            <p>Get a quick intro on how to boost your productivity with Apple Computers</p>
          </div>
        </a>
        <a href="https://bddblog.netlify.app/pages/tips-tricks.html#tt-091620">
          <div className="blog-ex">
            <img src={blog2} alt="blog-img" />
            <h1>Shortcuts To Success (for computers)</h1>
            <p>Get a quick intro on how to boost your productivity with Apple Computers</p>
          </div>
        </a>
      </div>

        <div className="clearfix footer_margin"></div>
          <br />
        <br />

      </div>
    </div>

    <Footer />

    </>
  );
}

export default PaymentsOps;
