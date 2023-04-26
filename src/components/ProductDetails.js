import React, { useContext } from "react";

import { Link } from "react-router-dom";

//Context
import { productContext } from "../context/ProductContextProvider";

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const products = useContext(productContext);
  const id = props.match.params.id;
  const productData = products[id - 1];

  const { image, title, description, price, category } = productData;

  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.image} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>category: </span>
          {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price}</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
