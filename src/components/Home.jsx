import React from 'react'
import NavbarSolid from './NavbarSolid';
import CarouselHome from './CarouselHome';
import StarSection from './StarSection';
import OfferSection from './OfferSection';
import CardsHome from './CardsHome';
import BannerEmail from './BannerEmail';
import OurCommitments from './OurCommitments';
import Footer from './Footer';


function Home(props) {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
    <NavbarSolid/>
    <CarouselHome/>
    <StarSection/>
    <OfferSection/>
    <CardsHome/>
    <BannerEmail/>
    <OurCommitments/>
    <Footer/>
    </>
  );
}

export default Home;
