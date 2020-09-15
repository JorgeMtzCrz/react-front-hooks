import React, {createContext, useState} from 'react';
import { ALL_ACCESORIES,  ALL_FETCHER } from './services/products_service'
import useSWR from 'swr'


export const MyContext = createContext()

export default function ContextProvider(props) {
  const { data } = useSWR(ALL_ACCESORIES, ALL_FETCHER)
  const [coupon, setCoupon] = useState(0)
  

  const accesories = data && data.accesories

  const [cart, setCart] = useState([])
  const [client, setClient] = useState({})


  const addToCart =(product)=>{
    setCart(prev => ([...prev, product] ))
  }

  const addClient = (client) =>{
    setClient(prev =>({...prev, client}))
  }

  const removeProduct = (e, i) =>{
     const cartFilter = cart.filter((product,index,arr) =>index !== i )
      setCart(cartFilter)
  }

  console.log(client)
  console.log(cart)
  return (
    <>
    <MyContext.Provider value={{ cart, coupon, removeProduct, client, addToCart, addClient, accesories}}>
    {props.children}
    </MyContext.Provider>
    </>
  );
}
