import React, { useState } from 'react';

import {
  Input,
  Button,
  Divider
} from 'reactstrap';
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const BannerEmail = (props) => {


  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

  return (
      <div style={{display:'flex', padding:"30px", marginBottom:"70px", flexWrap:"wrap", backgroundColor:"#418CFA", flexDirection:"row", justifyContent:"center", alignContent:"center", alignItems:"center",height:"229px"}}>
        <div style={{display:"flex", width:"100%", flexWrap:"wrap", alignContent:"center", alignItems:"center"}}>
            <p className="banner-text">Receive the best offers and more!</p>
            <Input id="search-input" style={{height:"72px", marginLeft:"20px", width:"273px", borderRadius: "8px"}} placeholder="Write your email here" type="email" />
            <Button style={{marginLeft:"20px", width:"177px", height:"72px", backgroundColor:"#DF4322", color:"white", borderRadius: "8px"}}>SEND</Button>
            <p style={{fontSize:"130px", marginLeft:"20px", color:"white", fontWeight:"100"}}>|</p>
            <div style={{display:"flex", width:"25%", flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
              <p style={{fontSize:"35px", color:"white"}}>Promos</p>
              <Button color="alert" style={{padding:"0", textAlign:"center", color:"white", borderRadius: "8px"}}>SEE MORE</Button>
            </div>
        </div>
        
        
      </div>
  );
}

export default BannerEmail;