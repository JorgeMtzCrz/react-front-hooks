import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-multi-carousel/lib/styles.css";
import "react-datetime/css/react-datetime.css";

import ContextProvider from './CartContext'




ReactDOM.render( <ContextProvider><Router/></ContextProvider> ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();