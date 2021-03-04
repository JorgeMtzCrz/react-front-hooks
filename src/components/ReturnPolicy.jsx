import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';
import TextSection from './TextSection';
import {Helmet} from "react-helmet";


function ReturnPolicy(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const paragraph1 = 'All televisions sold by Best Deal in Town carry a 90-day warranty from date of purchase unless otherwise indicated. All other electronics products carry a 30-day warranty unless otherwise indicated.'
  const paragraph2 = 'Physical damage is not covered by any warranty. Best Deal in Town does not accept returns on televisions or other products unless authorized by ownership, however we will gladly EXCHANGE TVs or other electronics under warranty only after inspection of purchased product. Wall mounts and other non-electronic items can be returned if they are unopened.'
  const paragraph3 = 'ANY ITEM RETURNED FOR A REFUND IS SUBJECT TO A NON-NEGOTIABLE 15% RESTOCKING FEE. ALL CASH REFUNDS OVER $100 WILL BE PAID WITH BUSINESS CHECK'
  const paragraph4 = `While some televisions may come with a manufacturer's warranty, Best Deal in Town does not guarantee any manufacturers warranty and items listed "as is" come with no warranty.`
  const paragraph5 = 'All returns or exchanges must have proof of purchase in the form of bill of sale or receipted invoice as well as ID when necessary.'
  const paragraph6 = 'If an extended warranty is purchased, the warranty will be subject to Best Deal in Town extended warranty terms and conditions, which is made available on request.'
  const paragraph7 = 'All deposits are NON-REFUNDABLE. If an item is not paid in full within 30 days of original purchase, Best Deal in Town reserves the right to sell said item while customer deposit becomes store credit for up to SIX MONTHS from original deposit.'
  const paragraphs = [paragraph1, paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,paragraph7]
  const returnPolicy = 'Return Policy'
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://bditdenver.com/return-policy" />
    </Helmet>
    <NavbarSolid/>
    <TextSection title={returnPolicy} paragraphs={paragraphs}/>
    <BannerEmail/>
    <Footer/>
    </>
  );
}

export default ReturnPolicy;
