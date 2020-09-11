import React, {useState} from 'react';
import {MyContext} from '../CartContext'




export default function CartDetails({setTable}) {
  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, removeProduct })=>{
      const subtotal = cart.reduce((pv,cv)=> pv + cv.price, 0)
      const discounts = cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)
      const total = subtotal - discounts -coupon
      return(
      <div className="cart-details">
      <div className="cart-product-details">
        <div className="banner-offer-cart">
          <h2>-50% OFF in all store!</h2>
          <h2>SHOP NOW!</h2>
        </div>
        <div className="bag-text">
          <p className="bag-text-green">My shopping bag item(s) {cart.length}</p>
          <p className="bag-text-blue">TOTAL: ${subtotal}</p>
        </div>
        {cart.map((e,i)=>{
          
          return(
            <>
              <div className="product-detail-cart mb-5">
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

        <button onClick={()=> setTable(2)} className="button-cart-continue">CONTINUE</button>
      </div>
      </div>
      )

    }}
    </MyContext.Consumer>
    </>
  );
}