import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import NotFound from "./Pages/NotFound.tsx";
import "./style/global.css";
import Collection from "./Pages/Collection.tsx";
import Clothing from "./Pages/Clothing.tsx";
import Cart from "./Pages/Cart.tsx";
import Product from "./Pages/Product.tsx";
import Checkout from "./Pages/Checkout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />}>
            <Route path="clothing" element={<Clothing />} />{" "}
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
