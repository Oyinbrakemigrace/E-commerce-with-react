import React from "react";
import { Products } from "../../composables/Products";
import ProductContainer from "./productContainer";

const Home = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:ml-[70px] mt-3 m-auto">
      {Products.map((product) => (
        <ProductContainer key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Home;
