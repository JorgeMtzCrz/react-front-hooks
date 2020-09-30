import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import {FormGroup} from 'reactstrap'
import useForm from '../hooks/useForm'


export default function ClientDetails({setTable}) {
  const [form, handleInput]= useForm()
  const client ={
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    telephone: form.telephone
  }


  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, addClient, removeProduct })=>{

      const subtotal = cart.reduce((pv,cv)=> pv + cv.price, 0)
      const discounts = cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)
      const total = subtotal - discounts -coupon
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
          <span className="details-row"><p className="text-prices-detail">TAX:</p> <p className="text-prices-detail">$ 0</p></span>
          <span className="details-row"><p className="text-prices-detail">COUPON DISCOUNT:</p> <p className="text-prices-detail">$ {coupon}</p></span>
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
