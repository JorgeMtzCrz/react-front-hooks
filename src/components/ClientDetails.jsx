import React, {useState, useEffect, useContext} from 'react';
import {MyContext} from '../CartContext'
import {FormGroup, Form} from 'reactstrap'
import useForm from '../hooks/useForm'
import {Label, Input} from 'reactstrap'
import {InlineWidget} from 'react-calendly'
import axios from 'axios'
import LoaderDate from './LoaderDate'
const isCalendlyScheduledEvent = (e) => {
  return e.data.event &&
         e.data.event.indexOf('calendly') === 0 &&
         e.data.event === 'calendly.event_scheduled'
}



export default function ClientDetails({setTable}) {
  const context = useContext(MyContext)
  const {dateDelivery, addDateDelivery, setDelivery} = context
  const [form, handleInput]= useForm()
  const [spin, setSpin] = useState(false)

 function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}
  useEffect(() => {
    window.addEventListener(
      'message',
      (e) => {
        if (isCalendlyScheduledEvent(e)) {
          e.preventDefault()
          setSpin(true)
          axios({
            method: 'GET',
            url: 'https://v1.nocodeapi.com/jorgemtzcrz/calendly/MTxdBsAFNADfFWQA',
          }).then(function (response) {
            // handle success
            e.preventDefault()
            addDateDelivery('Date Scheduled')
            setSpin(false)
          }).catch(function (error) {
            // handle error
            console.log(error);
          })
        }
      }
    )
  }, [addDateDelivery, setDelivery])
  
  return (
    <>
    <MyContext.Consumer>
    {({cart, coupon, addClient, delivery, handleRadio, removeProduct })=>{
      const deliveryPay = delivery.delivery === "delivery" ? 20 : 0 
      const deliveryPayFix = parseFloat(Math.round(deliveryPay*100)/100).toFixed(2)
      const subtotal = parseFloat(Math.round(cart.reduce((pv,cv)=> pv + cv.price, 0)*100)/100).toFixed(2)
      let tax = Math.round((subtotal* 0.0775)*100)/100       
      const discounts = parseFloat(Math.round(cart.reduce((pv,cv)=>  cv.discount ? pv + cv.discount : 0, 0)*100)/100).toFixed(2)
      const total = parseFloat(Math.round((subtotal - discounts - coupon + deliveryPay + tax)*100)/100).toFixed(2)
      const couponFix = parseFloat(Math.round(coupon*100)/100).toFixed(2)
      const client ={
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        telephone: form.telephone,
        delivery: deliveryPay,

      }
      

      return(
      <div className="cart-details">
      <div className="cart-client-details">
        <p className="options-cart bag-text-green">PERSONAL INFO</p>
        <p className="text-prices-detail">Please, fill in the blanks with the information of the person who
        is going to pickup your products.</p>
        <Form>
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
        </Form>
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
          display:!spin&&delivery.delivery==="delivery"&&dateDelivery===""?'block':"none"
        }}
        prefill={{
          email: '-',
          name: '-',
          
        }}
        />
        <LoaderDate spin={spin}/>
        <div style={{marginTop:'30px', textAlign: 'center', display: dateDelivery==="" ? 'none': 'block'}}>
          <p className="text-prices-detail">
          Your delivery has been scheduled.
          </p>
          <p className="text-prices-detail">
          Please click on continue to complete the process.
          </p>
        </div>

      </div>
      <div className="cart-total">
        <p className="options-cart">OPTIONS</p>
        <div>
          <p className="text-prices-detail">COUPON</p>
          <input className="coupon-input" type="text" name="coupon" />
          <button className="coupon-button">APPLY</button>
        </div>
        <hr className="divider"/>
        <div className="price-details">
          <p className="text-prices-detail">PRICE DETAILS</p>
          <span className="details-row"><p className="text-prices-detail">SUBTOTAL:</p><p className="text-prices-detail">$ {subtotal}</p></span>
          <span className="details-row"><p className="text-prices-detail">DISCOUNTS:</p><p className="text-prices-detail">$ {discounts}</p></span>
          <span className="details-row"><p className="text-prices-detail">TAX:</p> <p className="text-prices-detail">$ {tax === 0 ? '0.00' : tax}</p></span>
          <span className="details-row"><p className="text-prices-detail">COUPON DISCOUNT:</p> <p className="text-prices-detail">$ {couponFix}</p></span>
          <span className="details-row" style={{visibility:delivery.delivery==="delivery"?'visible':"hidden"}}><p className="text-prices-detail">DELIVERY:</p> <p className="text-prices-detail">$ {deliveryPayFix}</p></span>

        </div>
        <hr className="divider"/>
        <span className="details-row"><p className="options-cart">TOTAL:</p> <p className="options-cart">$ {total}</p></span>

        <button  onClick={()=> {addClient(client, setTable); }} className="button-cart-continue">CONTINUE</button>
        
      </div>
      </div>
      )

    }}
    </MyContext.Consumer>
    </>
  );
}
