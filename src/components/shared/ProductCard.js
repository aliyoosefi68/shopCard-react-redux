import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

//functions
import { shortenTitle, isInCart, quantityCount } from "../../helpers/functions";

//context
import { cartContext } from "../../context/CardContextProvider";

//icons
import trashIcon from "../../assets/icons/trash.svg";

const ProductCard = ({ productData }) => {
  const { image, price, title, id } = productData;
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.productImg} />
      <h3>{shortenTitle(title)}</h3>
      <p>${price}</p>
      <div className={styles.linckContainer}>
        <Link to={`/products/${id}`}>details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, id) === 1 && (
            <button
              className={styles.smalButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcon} alt="trash icon" />
            </button>
          )}

          {quantityCount(state, id) > 1 && (
            <button
              className={styles.smalButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, id) > 0 && (
            <span>{quantityCount(state, id)} </span>
          )}
          {isInCart(state, id) ? (
            <button
              className={styles.smalButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
