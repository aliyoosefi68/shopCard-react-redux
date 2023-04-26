import React from "react";
import { Link } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//icon
import shopIcon from "../../assets/icons/shop.svg";

//style
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const state = useSelector((state) => state.cartState);
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
