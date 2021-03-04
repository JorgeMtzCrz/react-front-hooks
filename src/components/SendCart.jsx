import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import axios from 'axios'
import Swal from 'sweetalert2'
// User STYLING
import '../assets/css/cartdetail.css'
import { useHistory } from 'react-router-dom';




 //const baseURL = 'http://localhost:3000/product/email'
 //const baseURL = 'https://bestdealapp.herokuapp.com/product/email'
 const baseURL = 'https://bditapp.herokuapp.com/product/email'

export default function SendCart({setTable}) {
  const history =useHistory()

  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, client:{client},dateStore, setCart, delivery, addClient, removeProduct })=>{
      const deliveryPay = delivery.delivery === "delivery" ? 20 : 0 
      const deliveryPayFix = parseFloat(Math.round(deliveryPay*100)/100).toFixed(2)
      let num = Math.floor((Math.random() * 9999999999) + 1);
      const subtotal = parseFloat(Math.round(cart.reduce((pv,cv)=> pv + cv.price, 0)*100)/100).toFixed(2)
      const discounts = parseFloat(Math.round(cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)*100)/100).toFixed(2)
      let tax = Math.round((subtotal* 0.0775)*100)/100 
      const total = parseFloat(Math.round((subtotal - discounts - coupon + deliveryPay+tax)*100)/100).toFixed(2)
      const couponFix = parseFloat(Math.round(coupon*100)/100).toFixed(2)
      const handleSubmit =(e) =>{
        e.preventDefault()
        const data = {
          email: client.email,
          name: client.firstname,
          products: cart,
          order: num,
          total: total,
          delivery: deliveryPay,
          dateStore: dateStore
        }
        axios.post(baseURL, data)
        .then(({data})=>{
          if(data === 'Email sent delivery'){
            Swal.fire({
              title: '<strong>Congrats</strong>',
              icon: 'success',
              html:
                'Your reservation has been made. <br/> ' +
                'You will receive a text message or phone call when we are on our way to deliver your items.<br/>' +
                'Feel free to call us with any questions.<br/>'+
                '303 593 0581',
              showCloseButton: true,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText:
                'Great!',
            }).then((result) => {
              if (result.isConfirmed) {
                history.push('/')
                setCart([])
              }
            })
            
          }
          else if(data === 'Email sent store'){
            Swal.fire({
              title: '<strong>Congrats</strong>',
              icon: 'success',
              html:
                'Your reservation has been made. <br/> ' +
                'Remember to pick it up before 7:00 PM or your reservation will be cancelled. <br/>' +
                'Feel free to call us with any questions.<br/>'+
                '303 593 0581',
              showCloseButton: true,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText:
                'Great!',
            }).then((result) => {
              if (result.isConfirmed) {
                history.push('/')
                setCart([])
              }
            })
          }
          
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
        <p className="options-cart bag-text-green">{delivery.delivery === 'delivery' ? 'DELIVERY' : 'PICKUP'}</p>
        <p className="text-prices-detail">
        {delivery.delivery === 'delivery' ? 'Your delivery is set. We will send your products on the previously registered date. Please be sure to be at your address on that day at that time. Remember you will have to pay once you get your products.' : 
        `Your products are ready for your pickup! Remember you have from now until 6:45pm of today to pick them up. After that time, we do not guarantee they will be available.`}
       </p>

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
          <span className="details-row"><p className="text-prices-detail">TAX:</p> <p className="text-prices-detail">$ {tax === 0 ? '0.00' : tax}</p></span>
          <span className="details-row"><p className="text-prices-detail">COUPON DISCOUNT:</p> <p className="text-prices-detail">$ {couponFix}</p></span>
          <span className="details-row" style={{visibility:delivery.delivery==="delivery"?'visible':"hidden"}}><p className="text-prices-detail">DELIVERY:</p> <p className="text-prices-detail">$ {deliveryPayFix}</p></span>
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
