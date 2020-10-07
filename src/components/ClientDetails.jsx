import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import {FormGroup} from 'reactstrap'
import useForm from '../hooks/useForm'
import {Label, Input} from 'reactstrap'
import {InlineWidget} from 'react-calendly'



export default function ClientDetails({setTable}) {

  const [form, handleInput]= useForm()
  const [delivery, setDelivery] = useState('')
  const deliveryPay = delivery.delivery === "delivery" ? 20 : 0 
  const deliveryPayFix = parseFloat(Math.round(deliveryPay*100)/100).toFixed(2)
  const client ={
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    telephone: form.telephone,
    delivery: deliveryPay
  }
  const handleRadio=(e)=>{
    e.persist()
    setDelivery(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, addClient, removeProduct })=>{

      const subtotal = parseFloat(Math.round(cart.reduce((pv,cv)=> pv + cv.price, 0)*100)/100).toFixed(2)
      const discounts = parseFloat(Math.round(cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)*100)/100).toFixed(2)
      const total = parseFloat(Math.round((subtotal - discounts - coupon + deliveryPay)*100)/100).toFixed(2)
      const couponFix = parseFloat(Math.round(coupon*100)/100).toFixed(2)
      return(
      <div className="cart-details">
      <div className="cart-client-details">
        <p className="options-cart bag-text-green">PERSONAL INFO</p>
        <p className="text-prices-detail">Please, fill in the blanks with the information of the person who
        is going to pickup your products.</p>
        <span className="details-row">
          <FormGroup className="group-form">
            <label className="text-prices-detail">First Name*</label>
            <input required onChange={handleInput} className="input-client" type="text" name="firstname" id="firstname"/>
          </FormGroup>
          <FormGroup className="group-form" >
            <label className="text-prices-detail">Last Name*</label>
            <input required onChange={handleInput} className="input-client" type="text" name="lastname" id="lastname"/>
          </FormGroup>
        </span>
          <FormGroup className="group-form">
            <label className="text-prices-detail">Email*</label>
            <input required onChange={handleInput} className="input-client" type="email" name="email" id="email"/>
          </FormGroup>
          <FormGroup className="group-form">
            <label className="text-prices-detail">Telephone*</label>
            <input required onChange={handleInput} className="input-client" type="text" name="telephone" id="telephone"/>
          </FormGroup>

          <p className="options-cart bag-text-green">DELIVERY</p>
          <p className="text-prices-detail">          
            Please choose one of the following options
          </p>
          <FormGroup check>
          <span className="details-row">
          <Label className="text-prices-detail" check>
            <Input style={{marginTop:"10px"}} onClick={handleRadio} type="radio" name="delivery" value="store" />{' '}
            I’ll pickup my products in the store.
          </Label>
          </span>
          <br/>
          <Label className="text-prices-detail" check>
            <Input style={{marginTop:"10px"}} onClick={handleRadio} type="radio" name="delivery" value="delivery" />{' '}
            I want my products to be delivered.
          </Label>
        </FormGroup>
        <InlineWidget
        url="https://calendly.com/bdit/delivery"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
        styles={{
          height: '1000px',
          display:delivery.delivery==="delivery"?'block':"none"
        }}
        prefill={{
          email: '-',
          name: '-',
          
        }}
        />



      </div>
      <div className="cart-total">
        <p className="options-cart">OPTIONS</p>
        <div>
          <p className="text-prices-detail">COUPON</p>
          <input className="coupon-input" type="text" name="coupon" id="coupon"/>
          <button className="coupon-button">APPLY</button>
        </div>
        <hr className="divider"/>
        <div className="price-details">
          <p className="text-prices-detail">PRICE DETAILS</p>
          <span className="details-row"><p className="text-prices-detail">SUBTOTAL:</p><p className="text-prices-detail">$ {subtotal}</p></span>
          <span className="details-row"><p className="text-prices-detail">DISCOUNTS:</p><p className="text-prices-detail">$ {discounts}</p></span>
          <span className="details-row"><p className="text-prices-detail">TAX:</p> <p className="text-prices-detail">$ 0.00</p></span>
          <span className="details-row"><p className="text-prices-detail">COUPON DISCOUNT:</p> <p className="text-prices-detail">$ {couponFix}</p></span>
          <span className="details-row" style={{visibility:delivery.delivery==="delivery"?'visible':"hidden"}}><p className="text-prices-detail">DELIVERY:</p> <p className="text-prices-detail">$ {deliveryPayFix}</p></span>

        </div>
        <hr className="divider"/>
        <span className="details-row"><p className="options-cart">TOTAL:</p> <p className="options-cart">$ {total}</p></span>

        <button  onClick={()=> {addClient(client); setTable('3')}} className="button-cart-continue">CONTINUE</button>
        
      </div>
      </div>
      )

    }}
    </MyContext.Consumer>
    </>
  );
}
