import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/nav/NavBar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/pages/Cart";
import Form from "./components/pages/Form";
import NotFound from "./components/pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>      
            <Route path="*" element={<NotFound/>} />
            <Route path="/CoffeTimeColl" element={<ItemListContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
);
