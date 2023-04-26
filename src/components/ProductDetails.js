import React from "react";
import { Link, useParams } from "react-router-dom";

//reddux
import { useSelector } from "react-redux";

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const products = useSelector((state) => state.productsState.products);
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
          <span className={styles.price}>$ {price}</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
