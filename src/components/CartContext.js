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
        },
      ]);
    } else {
      //al encontrarlo, entonces aumentamos el qty de ese producto
      found.qtyItem += qty;
      found.total += item.precio * qty;
      setCartList([...cartList]);
    }
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };

  const removeList = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
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
