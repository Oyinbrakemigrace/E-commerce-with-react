import React, { useContext } from "react";
import { HomeContext } from "../../context/AppContext";

const ProductContainer = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, cartCount } = useContext(HomeContext);
  const AmountOfCartItem = cartItems[id];
  return (
    <div>
      <div className="my-5 mx-3">
        <img src={productImage} alt="" className="md:w-[80%] sm:w-[60%]" />
        <p>
          <b>{productName}</b>
        </p>
        <p>N{price}</p>
        <button
          className="bg-transparent text-zinc-800 border border-emerald-700 px-2 rounded-lg hover:bg-emerald-700 hover:text-white"
          onClick={() => {addToCart(id); cartCount()}}
        >
          Add to cart {AmountOfCartItem > 0 && <>({AmountOfCartItem})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductContainer;
