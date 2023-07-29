import React, { useContext } from "react";
import { Products } from "../../composables/Products";
import CartContainer from "./CartContainer";
import { HomeContext } from "../../context/HomeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartTotalAmount } = useContext(HomeContext);
  const subTotal = cartTotalAmount();
  return (
    <div>
      <h1 className="text-center text-3xl">Cart Items</h1>
      <div className=" md:w-1/2 space-y-7 m-auto ">
        {Products.map((product) => (
          <CartContainer data={product} />
        ))}
        <div className="text-center space-y-5 ">
          <p className="text-2xl font-bold">Subtotal : N{subTotal}</p>
          <div className="p-4">
            <button
              className="bg-emerald-700 text-white mx-4 px-3 py-2 rounded-md text-center font-medium"
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
