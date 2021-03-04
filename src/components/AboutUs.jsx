import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';
import Why from './WhyBdd';
import ScrollPartners from './ScrollPartners';
import Hit from './Hit';
import TestimonialCarousel from './TestimonialCarousel';
import FeelBoxed from './FeelBoxed';
import {Helmet} from "react-helmet";

function AboutUs(props) {

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://bditdenver.com/about" />
    </Helmet>
    <NavbarSolid/>
    <Why/>
    <ScrollPartners/>
    <Hit/>
    <TestimonialCarousel/>
    <FeelBoxed/>
    <BannerEmail/>
    <Footer/>
    </>
  );
}

export default AboutUs;
