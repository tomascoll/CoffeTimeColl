import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      {test.cartList.length > -0 &&
        test.cartList.map((prod) => (
          <div key={prod.idItem}>
            <img src={prod.image} />
            <p>{prod.name}</p>
            <p>${prod.precio}</p>
            <p>{prod.qtyItem}</p>
            <p>${prod.total}</p>
            <button onClick={() => test.deleteItem(prod.idItem)}>Delete</button>
          </div>
        ))}

      {test.cartList.length > 0 ? (
        <button onClick={test.removeList}>Delete all</button>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

export default Cart;
