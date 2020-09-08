import React from 'react';
import axios from 'axios'
import useForm from '../hooks/useForm'
import handleAsync from '../utils/handleAsync'
import {  CREATE_SUBSCRIBER } from '../services/email_service'
import Swal from 'sweetalert2'
import composeData from '../utils/composeData'

// USER STYLING
import '../assets/css/home.css'



import {
  Input,
  Button
} from 'reactstrap';


const BannerEmail = (props) => {
  const [form, handleInput]= useForm()
  const email = form.email
  const sendEmail = async e=>{
    e.preventDefault()
    if(form.email === undefined ){
      Swal.fire(
        'Something went wrong!',
        'The field email is required to join',
        'error'
      )
    }else{
      const response = await handleAsync(() => CREATE_SUBSCRIBER({email}))

      if(response){
        Swal.fire(
          'Good job!',
          'Now you joined in Best Deal in Town!',
          'success'
        )
  
      }else{
        Swal.fire(
          'Something went wrong!',
          'Try again in a few minutes',
          'error'
        )
      }
    }
    


  }
  return (
    <>
    <div className="testi-spacer"></div>
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>
            <form className="info-banner">
            <Input  id="search-input" onChange={handleInput} name="email" className="banner-input" placeholder="Email" type="email" size="100" />
            <Button onClick={sendEmail} className="banner-button">SEND</Button>
            </form>
        </div>
      </div>
      <div className="testi-spacer"></div>
      </>
  );
}

export default BannerEmail;
