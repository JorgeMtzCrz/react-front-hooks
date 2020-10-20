import React from 'react'
import '../assets/css/aboutus.css'



function TextSection(props) {


  document.documentElement.classList.remove("nav-open");

  const {title, paragraphs} = props
  return (
    <>
    <div className="mb-3 why-section-container">
          <h1 className="title-hit title-gray">{title}</h1>
          <div className="mt-3 text-container-why">
          {paragraphs.map(paragraph =>{

            return(
              <p style={{textAlign:"justify"}} className="text-why-black">
                {paragraph}
              </p>
            )
          })}
            
          </div>
    </div>

    </>
  );
}

export default TextSection;
