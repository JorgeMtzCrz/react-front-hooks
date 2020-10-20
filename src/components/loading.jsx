import React from 'react';

// USER STYLING
import '../assets/css/loading.css'


const LoadScreen = (props) => {

  return (
    <>
      <div className="loading-container">
          <div>
            Loading ...
          </div>
          <div>
            <p>
              Big ol loading screen
            </p>
          </div>
      </div>
    </>
  );

}

export default LoadScreen;
