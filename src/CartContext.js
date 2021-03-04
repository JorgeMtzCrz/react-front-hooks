import React, {createContext, useState} from 'react';
import { ALL_ACCESSORIES,  ALL_FETCHER } from './services/products_service'
import useSWR from 'swr'
import Swal from 'sweetalert2'


export const MyContext = createContext()

export default function ContextProvider(props) {
  const { data } = useSWR(ALL_ACCESSORIES, ALL_FETCHER)
  const [coupon, setCoupon] = useState(0)
  const [delivery, setDelivery] = useState('')
  const [dateDelivery, setDateDelivery] = useState('')
  const [tax, setTax] = ('')


  const accesories = data && data.accesories

  const [cart, setCart] = useState([])
  const [client, setClient] = useState({})

  const handleRadio=(e)=>{
    e.persist()
    setDelivery(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }
  const addDateDelivery = (date) =>{
    setDateDelivery(date)
  }

  const addToCart =(product)=>{
    setCart(prev => ([...prev, product] ))
    Swal.fire(
      `The product ${product.title} was added successfully `,
      '',
      'success'
    )
  }

  

  const addClient = (client, setTable) =>{
    if((client.firstname === undefined || "") ||(client.lastname===undefined||"")||(client.email===undefined||"")||(client.telephone===undefined||"")){
      Swal.fire(
        `Please complete the form`,
        '',
        'error'
      )
    }else{
      setClient(prev =>({...prev, client}))
      setTable('3')
    }
  }


  const removeProduct = (e, i) =>{
     const cartFilter = cart.filter((product,index,arr) =>index !== i )
      setCart(cartFilter)
  }
  return (
    <>
    <MyContext.Provider 
    value={{ cart, setCart, coupon, addDateDelivery, setDelivery, removeProduct, client, addToCart, addClient, accesories, handleRadio, delivery, dateDelivery, setDateDelivery}}>
    {props.children}
    </MyContext.Provider>
    </>
  );
}
