import React from 'react'

// ICONS
import estrella from '../assets/images/estrella.svg'
import star from '../assets/icons/star.svg'
import halfStar from '../assets/icons/half-star.svg'
import mostStar from '../assets/icons/most-star.svg'

// USER STYLING
import '../assets/css/home.css'




function StarSection(props) {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
    <div className="testi-spacer"></div>
    <div style={{display:"flex", width:"100%", height:"450px", alignItems:"center", flexDirection:"column"}}>
      <div className="main-home-section-title" style={{display: 'flex', alignItems: "center", alignContent:"center"}}>
        <h3 style={{color:"#003366", fontSize:"30px"}}>#1 eco-Electronic Store in Denver</h3>
      </div>
      <div className="stars-aligned" style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-around"}}>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#003366", fontSize:"30px",marginBottom:"15px"}}>4.8</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={mostStar} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Facebook</p>
        </div>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#003366", fontSize:"30px",marginBottom:"15px"}}>4.5</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={halfStar} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Yelp</p>
        </div>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#003366", fontSize:"30px",marginBottom:"15px"}}>4.4</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={halfStar} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Google</p>
        </div>
      </div>
      <div className="star-pride-container">We are <span className="text-green">humbled and proud</span> to say that we have the <span className="text-blue">most loyal customers</span>, <br /> that our shared vision has brought us a lot of recognition over the years, and as we near a decade in Englewood, we are so grateful to be part of a <span className="text-green">wonderful community</span>.</div>

    </div>

    <div className="testi-spacer"></div>
    </>
  );
}

export default StarSection;
