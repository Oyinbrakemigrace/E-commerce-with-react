import React from 'react'
import { Products } from '../../composables/Products'
import ProductContainer from './productContainer'

const Home = () => {
  return (
    <div>
        {Products.map((product)=><ProductContainer data={product}/>)}
    </div>
  )
}

export default Home