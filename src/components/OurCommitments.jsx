import React, {useState} from 'react'

import greatquality from "../assets/images/greatquality.png"
import greenfriendly from "../assets/images/greenfriendly.png"
import bestclass from "../assets/images/bestclass.png"
import customer from "../assets/images/customer.png"


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
            <img src={greatquality} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Great quality</h4>
        </div>
        <div className="card-commitment">
            <img src={greenfriendly} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">100% Green friendly</h4>
        </div>
        <div className="card-commitment">
            <img src={bestclass} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Best in class</h4>
        </div>
        <div className="card-commitment">
            <img src={customer} alt="cards" width="125px" height="125px"/>
            <h4 className="subtitle-commitment">Top customer service</h4>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default OurCommitments;