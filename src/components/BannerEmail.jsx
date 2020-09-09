import React from 'react';
import useForm from '../hooks/useForm'
import axios from 'axios'
import handleAsync from '../utils/handleAsync'
import {  CREATE_SUBSCRIBER } from '../services/email_service'
import Swal from 'sweetalert2'

// USER STYLING
import '../assets/css/home.css'



import {
  Input,
  Button
} from 'reactstrap';

//const baseURL = 'http://localhost:3000/subscriber'
const baseURL = 'https://bestdealtest.herokuapp.com/subscriber/create'

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
        axios.post(baseURL, email)
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
    


  }
  return (
    <>
    <div className="testi-spacer"></div>
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>
<<<<<<< HEAD
            <Button className="banner-button">Click Here</Button>
=======
            <form className="info-banner">
            <Input  id="search-input" onChange={handleInput} name="email" className="banner-input" placeholder="Email" type="email" size="100" />
            <Button onClick={sendEmail} className="banner-button">SEND</Button>
            </form>
>>>>>>> 58f55325524dac0f69f55b116ef7bd4f218ee5f3
        </div>
      </div>
      <div className="testi-spacer"></div>
      </>
  );
}

export default BannerEmail;
