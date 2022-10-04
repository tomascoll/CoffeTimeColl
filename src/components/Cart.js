import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "./fireBaseConfig";

const Cart = () => {
  const context = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = context.cartList.map((item) => ({
      id: item.idItem,
      title: item.name,
      price: item.precio,
      qty: item.qtyItem,
    }));

    context.cartList.forEach(async (item) => {
      const itemRef = doc(db, "productos", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    let order = {
      buyer: {
        name: "David Martinez",
        email: "davito@gmail.com",
        phone: "987869",
      },
      total: context.totalItemsPrice(),
      items: itemsForDB,
      date: serverTimestamp(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Your order has been created. The ID of your order is:\n\n" +
            result.id
        )
      )
      .catch((err) => console.log(err));

    context.removeList();
  };

  return (
    <>
      {context.cartList.length > 0 &&
        context.cartList.map((product) => (
          <div key={product.idItem} className="fondoCarrito">
            <img src={product.image} className="imgCarrito" />
            <div className="column">
              <h1 className="nameCarrito">{product.name}</h1>
              <h2 className="precioCarrito">${product.precio}</h2>
            </div>
            <div className="column">
              <h3 className="titleCarrito">Amount</h3>
              <p className="qtyCarrito">{product.qtyItem}</p>
            </div>
            <div className="column">
              <h3 className="titleCarrito">Sub total</h3>
              <p className="totalCarrito">${product.total}</p>
            </div>
            <button
              className="deleteCarrito"
              onClick={() => context.deleteItem(product.idItem)}
            >
              Delete
            </button>
          </div>
        ))}

      {context.cartList.length > 0 ? (
        <div className="totalPrice">
          <h2>Total ${context.totalItemsPrice().toFixed(2)}</h2>
          <button className="completeP" onClick={createOrder}>
            {" "}
            Complete purchase{" "}
          </button>
          <button className="deleteAll" onClick={context.removeList}>
            Delete all
          </button>
        </div>
      ) : (
        <div className="carritoVacio">
          <h1 className="titleVacio">Your cart is empty</h1>
          <h2 className="subVacio">Add products to fill it!</h2>
          <Link to="/">
            <button className="continue">View all products</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
