import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Carousel } from 'react-responsive-carousel';
import NavbarSolid from './NavbarSolid';
import logo from '../assets/images/logo.png'


function CarouselHome(props) {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <> 
    <Carousel autoPlay showThumbs={false} showStatus={false} className="mb-5">
        <div style={{display: "flex", width:"100%", height:"340px", backgroundColor:"white"}}>
            <div style={{width:"50%"}}>
              <h2>Titulo</h2>
              <h3>Subtitulo</h3>
              <p>pequeña nota</p>
              <button>see more</button>
            </div>
            <div style={{width:"50%"}}>
            <img alt="" width="100%" height="100%" src={logo} />
            </div>
        </div> 
        <div style={{display: "flex", width:"100%", height:"340px", backgroundColor:"white"}}>
            <div style={{width:"50%"}}>
              <h2>Titulo</h2>
              <h3>Subtitulo</h3>
              <p>pequeña nota</p>
              <button>see more</button>
            </div>
            <div style={{width:"50%"}}>
            <img alt="" width="100%" height="100%" src={logo} />
            </div>
        </div> 
        <div style={{display: "flex", width:"100%", height:"340px", backgroundColor:"white"}}>
            <div style={{width:"50%"}}>
              <h2>Titulo</h2>
              <h3>Subtitulo</h3>
              <p>pequeña nota</p>
              <button>see more</button>
            </div>
            <div style={{width:"50%"}}>
            <img alt="" width="100%" height="100%" src={logo} />
            </div>
        </div>        
    </Carousel>
            
    </>
  );
}

export default CarouselHome;