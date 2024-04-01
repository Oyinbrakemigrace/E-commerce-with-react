import React, { createContext, useState } from "react";
import { Products } from "../composables/Products";

export const HomeContext = createContext(null);

const defaultCartItem = () => {
  const cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const HomeContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCartItem());
  const [cart, setCart] = useState(0)

  const inputChange = (changedAmnount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: changedAmnount }));
  };

  const addToCart = (itemId) => {

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const cartTotalAmount = () => {
    let subTotal = 0;
    for (const key in cartItems) {
      //Used for..in loop because it's iterating through an object. cartItems[key]= gives the value (quantity) of each item picked
      if (cartItems[key] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(key)); // This line uses the find method to search the Products array for a product whose id matches
        //Number(key)-(the current key ID in the loop). The find method returns the first product that
        //satisfies the condition (i.e whose id matches the current key ID).
        subTotal += cartItems[key] * itemInfo.price;
      }
    }
    return subTotal;
  };

  const cartCount = ()=>{
    setCart(cart + 1 )
  }

   const removeCartCount = () => {
     setCart(cart - 1);
   };
  // console.log(cartItems)

  return (
    <HomeContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        inputChange,
        cartTotalAmount,
        cartCount,
        cart,
        removeCartCount,setCart
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
