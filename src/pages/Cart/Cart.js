import React from 'react'
import { Products } from '../../composables/Products'
import CartContainer from './CartContainer'


const Cart = () => {
  return (
    <div>
      <h1 className='text-center'>Cart Items</h1>
      <div>
        {Products.map((product)=><CartContainer data={product} />)}
      </div>
    </div>
  )
}

export default Cart