import React, {useState} from 'react';
import useForm from '../hooks/useForm'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// USER STYLING
import '../assets/css/home.css'


const baseURL = 'http://localhost:3000/subscriber'
// const baseURL = 'https://bestdealtest.herokuapp.com/subscriber/create'

const BannerEmail = (props) => {
  const [form, handleInput]= useForm()
  const email = form.email
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>

            <Button onClick={toggle} className="banner-button">Click Here</Button>
        </div>
      </div>
      <div className="testi-spacer"></div>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Receive the best offers</ModalHeader>
        <ModalBody>
        <div id="mc_embed_signup">
        <form action="https://bestdealdenver.us7.list-manage.com/subscribe/post?u=2c978d5e0ee8e92b4ee843ea8&id=3deffbdbeb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
         <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">First Name </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
        </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
        </div>
          <div id="mce-responses" class="clear">
         <div class="response" id="mce-error-response" style={{display:'none'}}></div>
         <div class="response" id="mce-success-response" style={{display:'none'}}></div>
          </div>
         <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_2c978d5e0ee8e92b4ee843ea8_3deffbdbeb" tabindex="-1" value=""/></div>
         <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
         </div>
        </form>
        </div>
        </ModalBody>
      </Modal>
      </>
  );
}

export default BannerEmail;
