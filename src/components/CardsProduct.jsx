import React from 'react'





function CardsProduct(){

  return(
    <div>
      <h1>
      <UncontrolledTooltip placement="bottom" isOpen={tooltipOpen} target={`tooltip`} toggle={toggle}>
                    Reserve your product, come to the store, pay and pick them up. Or choose a delivery date and time and pay when you receive them. We will soon have an online payment solution that avoids fraud.
                    </UncontrolledTooltip>
      </h1>
    </div>
  )
}
export default CardsProduct