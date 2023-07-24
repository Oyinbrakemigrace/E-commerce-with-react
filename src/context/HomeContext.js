import React, { createContext, useState } from 'react'
import { Products } from '../composables/Products'


const defaultCartItem = ()=>{
    const cart = {}
    for(let i=0 ; i<Products.length ; i++){
        cart[i] = 0
    }
    return cart
}


export const HomeContext = createContext(null)

const HomeContextProvider = (props) => {
    const[cartItems, setCartItems]= useState(defaultCartItem)

    const addToCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, itemId : prev[itemId]+ 1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, itemId : prev[itemId]- 1}))
    }

  return (
    <HomeContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {props.children}
    </HomeContext.Provider>
  )
}

export default HomeContextProvider