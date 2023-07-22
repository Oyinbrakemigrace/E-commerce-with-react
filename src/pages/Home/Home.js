import React from 'react'
import { Products } from '../../composables/Products'
import ProductContainer from './productContainer'

const Home = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 space-y-6 p-4 m-auto' >
        {Products.map((product)=><ProductContainer data={product}/>)}
    </div>
  )
}

export default Home