import React, {useState, useContext} from 'react';
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
import {Helmet} from "react-helmet";


export default function Cart() {
  const context = useContext(MyContext)
  const {delivery} = context
  const [wtab, setTab] = useState('1')
  const setTable = (number)=>{
    setTab(`${number}`)
  }
  
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://bditdenver.com/cart" />
    </Helmet>
    <NavbarSolid/>
    <div className="cart-breadcrumb">
      <span onClick={()=> setTable('1')} style={{color:"#96BA27", fontWeight:"bold"}} className="text-breadcrumb">BAG </span>
      <p className="dash-breadcrumb">- - - - - - - -</p>
      <p className="dash-breadcrumb-2">- - - -</p>
      <p onClick={()=> setTable('2')}  style={{color: wtab === '2' || wtab==='3' ?"#96BA27" : "#727287", fontWeight: wtab === '2' ? 'bold' : '0'}}
      className="text-breadcrumb">INFORMATION</p>
      <p className="dash-breadcrumb">- - - - - - - -</p>
      <p className="dash-breadcrumb-2">- - - -</p>
      <p onClick={()=> setTable('3')}  style={{color: wtab === '3' ?"#96BA27" : "#727287", fontWeight: wtab === '3' ? 'bold' : '0'}}
      className="text-breadcrumb">{delivery.delivery === 'delivery' ? 'DELIVERY' : 'PICKUP'}</p>
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
