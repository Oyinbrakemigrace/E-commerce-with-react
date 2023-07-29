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

    const inputChange = (changedAmnount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: changedAmnount}))
    }

    const addToCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId] + 1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId]- 1}))
    }

    const cartTotalAmount = ()=>{
        let subTotal = 0
        for(const key in cartItems){    //Used for..in loop because it's iterating through an object
            if(cartItems[key]> 0){
                let itemInfo = Products.find((product)=> product.id === Number(key))
                subTotal += cartItems[key] * itemInfo.price
            }
        }
        return subTotal
    }

    // console.log(cartItems)

  return (
    <HomeContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        inputChange,
        cartTotalAmount,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider