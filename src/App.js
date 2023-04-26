import { Provider } from "react-redux";

//redux
import store from "./redux/store";

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import NavigationBar from "./components/shared/NavigationBar";
import ShopCard from "./components/ShopCard";

import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationBar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCard />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
