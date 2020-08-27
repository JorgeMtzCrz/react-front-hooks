import React from 'react'
import Carousel from "react-multi-carousel";

// USER STYLING
import "react-multi-carousel/lib/styles.css";
import '../assets/css/aboutus.css'

// IMAGES
import testimonial from '../assets/images/testimonial.png'
import star from '../assets/images/estrella.svg'



function TestimonialCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
      <>
        <div className="testi-spacer">
          <h4 className="title-green title-hit">What people are saying about us</h4>
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
        itemClass="carousel-item-padding-30-px"
        centerMode={true}
      >
      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={testimonial} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Julia Gallegos</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Staff is wonderful!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>Awesome - great selection TV’s are amazing Samsung, LG, Vizio, TCL, staff is wonderful!!!</p>
        </div>
      </li>
      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={testimonial} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Lissa Gallegos</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Staff is wonderful!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>Awesome - great selection TV’s are amazing Samsung, LG, Vizio, TCL, staff is wonderful!!!</p>
        </div>
      </li>

      <li>
        <div className="testi-section mb-5" >
          <img style={{marginTop:"40px"}} src={testimonial} alt="testimonial" />
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287"}}>Andie Gallegos</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{marginTop:"20px",fontSize:"30px", color:"black"}}>Staff is wonderful!</p>
          <p style={{marginTop:"40px",fontSize:"20px", color:"#727287", textAlign:"center"}}>Awesome - great selection TV’s are amazing Samsung, LG, Vizio, TCL, staff is wonderful!!!</p>
        </div>
      </li>

      </Carousel>
      <div className="testi-spacer"></div>
      </>
  );
}

export default TestimonialCarousel;
