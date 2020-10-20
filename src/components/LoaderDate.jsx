import React from 'react';
import { Spinner } from 'reactstrap';

// USER STYLING
import '../assets/css/loading.css'


const LoaderDate = (props) => {
  const {spin} = props
  return (
    <>
      <div style={{display: spin ? 'block':'none'}} className="loading-container">
          <div>
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow"/>
          </div>
          <div>
            <p>
            Your delivery is being scheduled
            </p>
          </div>
      </div>
    </>
  );

}

export default LoaderDate;
