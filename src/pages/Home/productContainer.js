import React from 'react'

const ProductContainer = (props) => {
    const{id, productName, productImage, price} = props.data
  return (
    <div>
      <div>
        <img src={productImage} alt="" className="md:w-[80%] sm:w-[60%]" />
        <p>
          <b>{productName}</b>
        </p>
        <p>N{price}</p>
        <button className='bg-transparent text-zinc-800 border border-emerald-700 px-2 rounded-lg hover:bg-emerald-700 hover:text-white'>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductContainer