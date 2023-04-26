import React, { useContext } from "react";

//context
import { productContext } from "../context/ProductContextProvider";

//component
import ProductCard from "./shared/ProductCard";

const Store = () => {
  const products = useContext(productContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard productData={product} key={product.id} />
      ))}
    </div>
  );
};

export default Store;
