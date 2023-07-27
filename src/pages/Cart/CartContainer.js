import React, { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext'

const CartContainer = (props) => {
    const { id, productName, productImage, price } = props.data;
    const{cartItems, addToCart, removeFromCart} = useContext(HomeContext)
  return (
    <div>
        {cartItems[id] > 0 && 
        <div className=''>
            <img src={productImage} alt="" />
            <p><b>{productName}</b></p>
            <p>{price}</p>
        </div>
        }
    </div>
  )
}

export default CartContainer