import React, { useContext } from "react";

//context
import { cartContext } from "../../context/CardContextProvider";

//function
import { shortenTitle } from "../../helpers/functions";

//icons
import trashIcon from "../../assets/icons/trash.svg";

//styles
import styles from "./Cart.module.css";

const Cart = ({ data }) => {
  const { image, title, price, quantity } = data;
  const { dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <img src={image} className={styles.productImage} />
      <div className={styles.data}>
        <h3>{shortenTitle(title)}</h3>
        <p>${price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity === 1 ? (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={trashIcon} style={{ width: "15px" }} />
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        )}
        {
          <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </button>
        }
      </div>
    </div>
  );
};

export default Cart;
