import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          image: item.image,
          name: item.name,
          precio: item.precio,
          qtyItem: qty,
          total: item.precio * qty,
          a : cartList.length + qty
        },
      ]);
    } else {
      found.qtyItem += qty;
      found.total += item.precio * qty;
      setCartList([...cartList]);
    }
  };

  const totalWidget = () =>{
    return cartList.reduce((acc, curr) => acc + (curr.qtyItem), 0);
  }

  const deleteItem = (id) => {
    let itemResult = cartList.filter((item) => item.idItem != id);
    setCartList(itemResult);
  };

  const removeList = () => {
    setCartList([]);
  };

  const totalItemsPrice = () => {
    return cartList.reduce((acc, curr) => acc + parseFloat(curr.total), 0);
  };

  return (
    <CartContext.Provider
      value={{
        totalWidget,
        totalItemsPrice,
        addItem,
        removeList,
        deleteItem,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
