import React, {useState} from 'react';

// USER STYLING
import '../assets/css/loading.css'


const baseURL = 'http://localhost:3000/subscriber'
// const baseURL = 'https://bestdealtest.herokuapp.com/subscriber/create'

const LoadScreen = (props) => {

  return (
    <>
      <div>
        Loading ...
      </div>
      <div>
        <p>
          Big ol loading screen
        </p>
      </div>
    </>
  );

}

export default LoadScreen;
