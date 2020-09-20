import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import {FormGroup} from 'reactstrap'
import useForm from '../hooks/useForm'

// User STYLING
import '../assets/css/cartdetail.css'



export default function SendCart({setTable}) {
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
      let num = Math.floor((Math.random() * 9999999999) + 1);
      const subtotal = cart.reduce((pv,cv)=> pv + cv.price, 0)
      const discounts = cart.reduce((pv,cv)=> pv + cv.discount ? cv.discount : 0, 0)
      const total = subtotal - discounts -coupon
      return(
      <div className="cart-details">
      <div className="cart-client-details">
        <p className="options-cart bag-text-green">PICKUP</p>
        <p className="text-prices-detail">Your products are ready for your pickup! Remember you have only 2 hours to pick them up.
        After that time, we do not guarantee they will be available.</p>

        <p className="text-prices-detail">Your order is:</p>
        <p className="order-number">{num}</p>

        <p className="options-cart bag-text-green">SUMMARY</p>

        {cart.map((e,i)=>{

          return(
            <>
              <div  className="product-detail-cart mb-5">
                <div className="img-detail-cart">
                  <img width="200px" height="120px" src={e.img} alt="img-product" />
                </div>
                <div className="fields-detail-cart">
                  <p className="bag-text-green">{e.title}</p>
                  <p className="description-detail">{e.description} </p>
                  <button className="remove-button" onClick={()=>removeProduct(e, i)}>REMOVE</button>
                </div>
                <div className="prices-detail-cart">
                  <p className="bag-text-blue">$ {e.price}</p>
                  <p className="bag-text-blue">$ {e.discount ? e.discount : 0} OFF</p>
                </div>
              </div>

            </>
          )
        })}
      </div>
      <div className="cart-total">
        <div className="price-details">
          <p className="options-cart bag-text-green">PRICE DETAILS</p>
          <span className="details-row"><p className="text-prices-detail">SUBTOTAL:</p><p className="text-prices-detail">$ {subtotal}</p></span>
          <span className="details-row"><p className="text-prices-detail">DISCOUNTS:</p><p className="text-prices-detail">$ {discounts}</p></span>
          <span className="details-row"><p className="text-prices-detail">TAX:</p> <p className="text-prices-detail">$ 0</p></span>
          <span className="details-row"><p className="text-prices-detail">COUPON DISCOUNT:</p> <p className="text-prices-detail">$ {coupon}</p></span>
        </div>
        <hr className="divider"/>
        <span className="details-row"><p className="options-cart">TOTAL:</p> <p className="options-cart">$ {total}</p></span>

        <button onClick={()=> {addClient(client); setTable('3')}} className="button-cart-continue">SUBMIT ORDER</button>
      </div>
      </div>
      )

    }}
    </MyContext.Consumer>
    </>
  );
}
