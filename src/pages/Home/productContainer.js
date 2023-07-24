import React, { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext';

const ProductContainer = (props) => {
    const{id, productName, productImage, price} = props.data
    const[cartItems, addToCart] = useContext(HomeContext)
  return (
    <div>
      <div>
        <img src={productImage} alt="" className="md:w-[80%] sm:w-[60%]" />
        <p>
          <b>{productName}</b>
        </p>
        <p>N{price}</p>
        <button className='bg-transparent text-zinc-800 border border-emerald-700 px-2 rounded-lg hover:bg-emerald-700 hover:text-white' onClick={addToCart}>Add to cart {cartItems}</button>
      </div>
    </div>
  );
}

export default ProductContainer