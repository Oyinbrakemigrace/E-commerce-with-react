import React, { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext'

const CartContainer = (props) => {
    const { id, productName, productImage, price } = props.data;
    const{cartItems, addToCart, removeFromCart} = useContext(HomeContext)
  return (
    <div>
      {cartItems[id] > 0 && (
        <div className="flex bg-gray-200 shadow rounded-lg">
          <img src={productImage} alt="" className="w-1/2 p-3"/>
          <div className='mt-14'>
            <p>
              <b>{productName}</b>
            </p>
            <p>N{price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer