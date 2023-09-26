import React, { useContext } from "react";
import { Products } from "../../composables/Products";
import CartContainer from "./CartContainer";
import { HomeContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartTotalAmount } = useContext(HomeContext);
  const subTotal = cartTotalAmount();
  return (
    <div>
      <h1 className="text-center md:text-3xl text-xl my-3">Cart Items</h1>
      <div className=" md:w-1/2 w-[80%] space-y-7 m-auto">
        {Products.map((product) => (
          <CartContainer key={product.id} data={product} />
        ))}
        <div className="text-center space-y-5 ">
          <p className="md:text-2xl text-xl font-bold">Subtotal : N{subTotal}</p>
          <div className="md:p-4">
            <button
              className="bg-emerald-700 text-white mx-4 px-3 py-2 md:my-0 my-5 rounded-md text-center font-medium"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button className="bg-emerald-700 text-white mx-4 px-3 py-2 rounded-md text-center font-medium">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
