import React from 'react'
import Carousel from "react-multi-carousel";

// USER STYLING
import "react-multi-carousel/lib/styles.css";
import '../assets/css/aboutus.css'

// IMAGES
import testimonial from '../assets/images/testimonial.png'
import star from '../assets/images/estrella.svg'
import ferndez from '../assets/images/f-a-fern.png'
import niel from '../assets/images/j-nielson.png'
import guzman from '../assets/images/k-guzman.png'
import braxton from '../assets/images/l-braxton.png'
import mj from '../assets/images/m-j.png'



function TestimonialCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
      <>
        <div className="testi-spacer">
          <h4 className="title-green title-hit">Why You'll Love Us Too</h4>
        </div>
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        centerMode={true}
      >


      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={ferndez} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Francisco A Fernandez</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Awesome deals and very friendly staff!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>
            Awesome deals and very freindly staff !
            If you wanna save money and get great products, this is the place to go!!
          </p>
        </div>
      </li>

      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={mj} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Marc J. Beerline</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Great products and AMAZING prices!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>
            This place is my go-to for any electronic needs.
            The staff is extremely helpful and interested in getting you what you want, not up-selling you.
            They have great products and AMAZING prices! 100% Recommend over any other big stores like Best Buy or Target.
          </p>
        </div>
      </li>
      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={braxton} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Levi Braxton</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>My TV works wonderfully!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>
            This place is Awesome! Great service, Great Products and AMAZING Prices! My TV works wonderfully.
            Thanks guys!
          </p>
        </div>
      </li>

      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={niel} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Jeff Nielson</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>These guys have always taken care of me</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>
            Very friendly and knowledgeable staff.
            Very good prices as well!
            I'm a professional installer (theater, antenna, satellite, networking, etc), and these guys have always taken care of me and anyone else that walks in the door!
            Highly recommended that you check this place out!
            As the company name says, this place is the best deal in town!
          </p>
        </div>
      </li>


      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={guzman} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Kim Guzman</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Prices are so good and services is awesome</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>
            I bought like 5 different things like tvs ipads i luv this place prices are so good and service is awsome and very nice people
          </p>
        </div>
      </li>


      </Carousel>
      <div className="testi-spacer"></div>
      </>
  );
}

export default TestimonialCarousel;
