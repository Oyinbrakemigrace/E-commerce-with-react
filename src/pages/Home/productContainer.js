import React from 'react'

const ProductContainer = (props) => {
    const{id, productName, productImage, price} = props.data
  return (
    <div>
      <div>
        <img src={productImage} alt="img" />
        <div>
          <p>
            <b>{productName}</b>
          </p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer