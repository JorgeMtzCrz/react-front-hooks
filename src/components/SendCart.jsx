import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import axios from 'axios'
import Swal from 'sweetalert2'
// User STYLING
import '../assets/css/cartdetail.css'


 const baseURL = 'http://localhost:3000/product/email'

export default function SendCart({setTable}) {

  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, client:{client}, addClient, removeProduct })=>{
      let num = Math.floor((Math.random() * 9999999999) + 1);
      const subtotal = cart.reduce((pv,cv)=> pv + cv.price, 0)
      const discounts = cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)
      const total = subtotal - discounts - coupon
      const handleSubmit =(e) =>{
        e.preventDefault()
        const data = {
          email: client.email,
          name: client.firstname,
          products: cart,
          order: num,
          total: total
        }
        axios.post(baseURL, data)
        .then(({data})=>{
          Swal.fire(
            'Good job!',
            'Now you joined in Best Deal in Town!',
            'success'
          )
        })
        .catch(err =>{
          Swal.fire(
            'Something went wrong!',
            'Try again in a few minutes',
            'error'
          )
        })
      }

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

        <button  onClick={handleSubmit} className="button-cart-continue">SUBMIT ORDER</button>
      </div>
      </div>
      )

    }}
    </MyContext.Consumer>
    </>
  );
}
