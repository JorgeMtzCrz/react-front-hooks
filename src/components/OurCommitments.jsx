import React, {useState} from 'react'

import best from "../assets/icons/best.svg"
import green from "../assets/icons/green.svg"
import recommend from "../assets/icons/recommend.svg"
import customer from "../assets/icons/customer.svg"


function OurCommitments(props) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <div className="commitments">
      <h3 className="title-commitment">Our commitments</h3>
      <div className="cards-content">
        <div className="card-commitment">
            <img src={best} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Commitment to Quality</h4>
        </div>
        <div className="card-commitment">
            <img src={green} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">100% Green Focused</h4>
        </div>
        <div className="card-commitment">
            <img src={recommend} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Best in class Prices</h4>
        </div>
        <div className="card-commitment">
            <img src={customer} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Highest Rated Customer Service</h4>
        </div>
      </div>

    </div>

    </>
  );
}

export default OurCommitments;
