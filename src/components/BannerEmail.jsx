import React, {useState} from 'react';
import useForm from '../hooks/useForm'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// USER STYLING
import '../assets/css/home.css'
import Mailchimp from 'react-mailchimp-form'


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
        <Mailchimp
        action='https://bestdealdenver.us7.list-manage.com/subscribe/post?u=2c978d5e0ee8e92b4ee843ea8&id=3deffbdbeb' 
        
        //Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'EMAIL',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'FIRST NAME',
            type: 'text',
            required: false
          },
          {
            name: 'LNAME',
            placeholder: 'LAST NAME',
            type: 'text',
            required: false,
            label: 'Last Name'
          }
        ]}
        // Change predetermined language
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        // Add a personalized class
        className='form-mailchimp'
        />
        </ModalBody>
      </Modal>
      </>
  );
}

export default BannerEmail;
