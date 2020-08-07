import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import star from '../assets/images/estrella.svg'


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
    <div style={{display:"flex", width:"100%", height:"250px", alignItems:"center", flexDirection:"column"}}>
      <div style={{display: 'flex', alignItems: "center", alignContent:"center"}}>
        <h3 style={{color:"#DF4322", fontSize:"30px"}}>How people rate us and our products</h3>
      </div>
      <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-around"}}>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#418CFA", fontSize:"30px",marginBottom:"15px"}}>4.8</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Rate on Facebook</p>
        </div>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#418CFA", fontSize:"30px",marginBottom:"15px"}}>4.5</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Rate on Yelp</p>
        </div>
        <div style={{display:"flex", alignItems:"center", alignContent:"center", flexDirection:"column"}}>
          <p style={{color:"#418CFA", fontSize:"30px",marginBottom:"15px"}}>4.4</p>
          <div style={{display:"flex", flexDirection:"row", marginBottom:"15px"}}>
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
            <img src={star} alt="star-complete" />
          </div>
          <p style={{color:"#000000", font: "Regular 20px/27px Open Sans"}}>Rate on Google</p>
        </div>
      </div>
    </div>       
    </>
  );
}

export default StarSection;