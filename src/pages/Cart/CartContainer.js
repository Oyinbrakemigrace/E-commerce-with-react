import React, { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext'

const CartContainer = (props) => {
    const { id, productName, productImage, price } = props.data;
    const{cartItems, addToCart, removeFromCart, inputChange} = useContext(HomeContext)
  return (
    <div>
      {cartItems[id] > 0 && (
        <div className="flex bg-gray-200 shadow rounded-lg">
          <img src={productImage} alt="" className="w-1/2 p-3" />
          <div className="mt-14">
            <p>
              <b>{productName}</b>
            </p>
            <p>N{price}</p>
            <div className="space-y-3">
              <button
                className="bg-slate-500 w-[15%]"
                onClick={() => addToCart(id)}
              >
                +
              </button>
              <input type="text" className="w-1/5 border-none text-center" value={cartItems[id]} onChange={(e)=>{inputChange(Number(e.target.value), id)}} />
              <button
                className="bg-slate-500 w-[15%]"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default CartContainer