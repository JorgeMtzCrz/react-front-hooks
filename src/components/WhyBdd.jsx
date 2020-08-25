import React from 'react'

function Why(props) {

  return (
        <div className="mb-5 why-section">
          <h4 className="title-green">Why Best Deal Denver?</h4>
          <div className="mt-5 text-container-why">
            <span className="text-why-black">We got started because we saw a problem: We need <span className="text-why-blue">good quality electronics</span>, but the <span className="text-why-green">BIG companies are focused more on profit than value.</span></span>
            <span className="mt-5 text-why-black">So, we decided to specialize in like new electronics for 2 reasons:</span>
            <div className="mt-5 container-why">
              <span className=" circle-blue">1</span><span className="ml-4 text-why-black"><span className="text-why-blue">We can focus on VALUE</span>, which for us means great quality + great pricing</span>
            </div>
            <div className="mt-5 container-why">
              <span className=" circle-green">2</span><span className="ml-4 text-why-black">The Environment! Some studies suggest <span className="text-why-green">we can reduce e-waste by 80% if we ALL bought second hand electronics</span></span>
            </div>
          </div>
        </div>
  );
}

export default Why;