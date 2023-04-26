import React, { useContext } from "react";
import { Link } from "react-router-dom";

//component
import Cart from "./shared/Cart";

//context
import { cartContext } from "../context/CardContextProvider";

//styles
import styles from "./ShopCart.module.css";

const ShopCard = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payment}>
          <p>
            <span>totla items : </span> {state.itemsCounter}
          </p>
          <p>
            <span>totla Payment : </span> ${state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => dispatch({ type: "CHECKOUT" })}
              className={styles.chechout}
            >
              check out
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className={styles.clear}
            >
              clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Ckeck out is successfully</h3>

          <Link to="/products">Buy more</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>Cart is empty</h3>
          <p>Want to buy?</p>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCard;
