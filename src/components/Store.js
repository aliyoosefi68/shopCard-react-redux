import React from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { fetchProducts } from "../redux/products/productAction";

//component
import ProductCard from "./shared/ProductCard";
import { useEffect } from "react";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  console.log(productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "150px",
      }}
    >
      {productsState.loading ? (
        <h2>Loading...</h2>
      ) : productsState.error ? (
        <p>Something went wrong</p>
      ) : (
        productsState.products.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Store;
