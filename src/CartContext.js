import React, {createContext, useState} from 'react';
import { ALL_ACCESORIES, ALL_AUDIO,  ALL_FETCHER } from './services/products_service'
import useSWR from 'swr'


export const MyContext = createContext()

export default function ContextProvider(props) {
  const { data, mutate } = useSWR(ALL_ACCESORIES, ALL_FETCHER)
  

  const accesories = data && data.accesories

  const [cart, setCart] = useState([])

  const addToCart =(product)=>{
    setCart(prev => ([...prev, product] ))
  }

  console.log(cart)
  return (
    <>
    <MyContext.Provider value={{ cart, addToCart, accesories}}>
    {props.children}
    </MyContext.Provider>
    </>
  );
}
