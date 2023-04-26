import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { cartContext } from "../../context/CardContextProvider";

//icon
import shopIcon from "../../assets/icons/shop.svg";

//style
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const { state } = useContext(cartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to="/products" className={styles.productLink}>
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopIcon} alt="shop card icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
