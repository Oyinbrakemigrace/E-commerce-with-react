import React, { createContext, useState } from 'react'
import { Products } from '../composables/Products'


export const HomeContext = createContext(null);

const defaultCartItem = ()=>{
    const cart = {}
    for(let i=1; i<Products.length + 1 ; i++){
        cart[i] = 0
    }
    return cart
}

const HomeContextProvider = (props) => {
    const[cartItems, setCartItems]= useState(defaultCartItem())

    const addToCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId] + 1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId]- 1}))
    }
    console.log(cartItems)

  return (
    <HomeContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {props.children}
    </HomeContext.Provider>
  )
}

export default HomeContextProvider