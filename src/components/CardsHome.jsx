import React, {useState} from 'react'

import tv from "../assets/images/bocina.png"


function CardsHome(props) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <> 
    <div className="cards-home">
      <div className="card-home">
        <div className="image-card">
          <img src={tv} alt="cards" width="277px" height="267px"/>
          <div className="text-card">
            <h4>Home Audio</h4>
          </div>
        </div>
        
      </div>
      <div className="card-home">
        <div className="image-card">
          <img src={tv} alt="card" width="277px" height="267px"/>
          <div className="text-card">
            <h4>Home Audio</h4>
          </div>
        </div>
        
      </div>
      <div className="card-home">
        <div className="image-card">
          <img src={tv} alt="card" width="277px" height="267px"/>
          <div className="text-card">
            <h4>Home Audio</h4>
          </div>
        </div>
        
      </div>
      <div className="card-home">
        <div className="image-card">
          <img src={tv} alt="card" width="277px" height="267px"/>
          <div className="text-card">
            <h4>Home Audio</h4>
          </div>
        </div>
        
      </div>


    </div>
      
    </>
  );
}

export default CardsHome;