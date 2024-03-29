import React from 'react'
import { Link } from 'react-router-dom';

// USER STYLING
import '../assets/css/aboutus.css'

// IMAGES
import stock from '../assets/images/iStock.png'


function FeelBoxed(props) {


  return (
    <>

        <div className="feelSection">
          <div className="image-offer">
            <img width="100%" height="100%" src={stock} alt='stock'/>
          </div>
          <div className="color-feel-boxed">
          </div>
          <div className="text-feel">
            <p className="title-feel ">Don't feel boxed in by the pressure to buy new. <br /> <span className="text-dark">Choose freedom, choose the environment, choose value. </span></p>
            <Link to="/hdtvs"><button className="button-feel ">BUY GREEN</button></Link>
          </div>
        </div>


    </>
  );
}

export default FeelBoxed;
