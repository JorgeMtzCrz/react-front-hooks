import React, {useState} from 'react';
import {MyContext} from '../CartContext'
import NavbarSolid from './NavbarSolid';
import Footer from './Footer';
import {
  TabContent,
  TabPane,
} from "reactstrap";
import CartDetails from './CartDetails';
import ClientDetails from './ClientDetails';
import SendCart from './SendCart';



export default function Cart() {
  const [wtab, setTab] = useState('1')
  const setTable = (number)=>{
    setTab(`${number}`)
  }
  return (
    <>
    <NavbarSolid/>
    <div className="cart-breadcrumb">
      <p style={{color:"#96BA27", fontWeight:"bold"}} className="text-breadcrumb">BAG </p>
      <p className="dash-breadcrumb">- - - - - - - -</p>
      <p style={{color: wtab === '2' || wtab==='3' ?"#96BA27" : "#727287", fontWeight: wtab === '2' ? 'bold' : '0'}} 
      className="text-breadcrumb">INFORMATION</p>
      <p className="dash-breadcrumb">- - - - - - - -</p>
      <p style={{color: wtab === '3' ?"#96BA27" : "#727287", fontWeight: wtab === '3' ? 'bold' : '0'}}
      className="text-breadcrumb">PICKUP</p>
    </div>
    <TabContent activeTab={wtab}>
      <TabPane tabId="1">
        <CartDetails setTable={setTable}/>
      </TabPane>
      <TabPane tabId="2">
        <ClientDetails setTable={setTable}/>
      </TabPane>
      <TabPane tabId="3">
        <SendCart/>
      </TabPane>
    </TabContent>
    <Footer/>
    </>
  );
}
