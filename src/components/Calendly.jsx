import React, { useState} from 'react';
import axios from 'axios';
import { InlineWidget, CalendlyEventListener } from 'react-calendly';

const Calendly = () => {
    const onEventScheduled = () => {
      axios({
        method: 'get',
        url: 'https://v1.nocodeapi.com/jorgemtzcrz/calendly/MTxdBsAFNADfFWQA',
      }).then(function (response) {
        // handle success
        console.log(response.data.collection[response.data.collection.length - 1].created_at);
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    
    return (
      <div>
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
      }}
      prefill={{
        email: '-',
        name: '-',
        
      }}
      />

        <CalendlyEventListener onEventScheduled={onEventScheduled} />
      </div>

    );

}
    
export default Calendly;