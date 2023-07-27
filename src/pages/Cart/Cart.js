import React from 'react'
import { Products } from '../../composables/Products'
import CartContainer from './CartContainer'


const Cart = () => {
  return (
    <div>
      <h1 className="text-center">Cart Items</h1>
      <div className=" md:w-1/2 space-y-7 m-auto ">
        {Products.map((product) => (
          <CartContainer data={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart