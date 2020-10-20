import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// USER STYLING
import '../assets/css/home.css'
import Mailchimp from 'react-mailchimp-form'



const BannerEmail = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="banner-email">
        <div className="info-banner">
            <p className="banner-text">Receive Exclusive Offers!</p>
            <Button onClick={toggle} className="banner-button">SIGN UP NOW!</Button>
        </div>
      </div>
      <div className="testi-spacer"></div>
      <Modal isOpen={modal} modalTransition={{ timeout: 100 }} backdropTransition={{ timeout: 1000 }}
        toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Receive the best offers. <br/> Subscribe to the Newsletter</ModalHeader>
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
            button: "SUBSCRIBE!"
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
