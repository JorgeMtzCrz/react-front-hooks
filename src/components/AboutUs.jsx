import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';
import Hero from './Hero';
import Why from './WhyBdd';
import ScrollPartners from './ScrollPartners';
import Hit from './Hit';
import TestimonialCarousel from './TestimonialCarousel';
import FeelBoxed from './FeelBoxed';


function AboutUs(props) {

  return (
    <> 
    <NavbarSolid/>
    <Hero/>
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
