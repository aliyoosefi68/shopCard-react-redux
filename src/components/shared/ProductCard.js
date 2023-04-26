import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";

//Action creators
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";

//functions
import { shortenTitle, isInCart, quantityCount } from "../../helpers/functions";

//icons
import trashIcon from "../../assets/icons/trash.svg";

const ProductCard = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const { image, price, title, id } = productData;

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
              onClick={() => dispatch(removeItem(productData))}
            >
              <img src={trashIcon} alt="trash icon" />
            </button>
          )}

          {quantityCount(state, id) > 1 && (
            <button
              className={styles.smalButton}
              onClick={() => dispatch(decrease(productData))}
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
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
