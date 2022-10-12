import userEvent from "@testing-library/user-event";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/fireBaseConfig";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Form = () => {
  const context = useContext(CartContext);

  const createOrder = async () => {
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
      buyer: user,
      total: context.totalItemsPrice(),
      items: itemsForDB,
      date: serverTimestamp(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order, valorInicial);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) => setidState(result.id))
      .catch((err) => console.log(err));
    context.removeList();
  };

  const valorInicial = {
    name: "",
    email: "",
    reemail:"",
    phone: "",
  };

  const [user, setUser] = useState(valorInicial);
  const [idState, setidState] = useState();

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const guardarDatos = async (e) => {
    e.preventDefault();
    setUser({ ...valorInicial });
  };

  const registro = () => {
    let ej1 = document.getElementById("inputsStyle1");
    let ej2 = document.getElementById("inputsStyle2");
    let ej3 = document.getElementById("inputsStyle3");
    let ej4 = document.getElementById("inputsStyle4");
    if (ej1.value && ej2.value && ej3.value && ej4.value && (ej2.value === ej4.value) != "") {
      if (context.cartList.length > 0) {
        createOrder();
      } else {
        swal({
          title: "Error",
          icon: "error",
          text: "It seems that you have nothing in the cart",
        });
      }
    } else {
      swal({
        title: "Error",
        text: "Something is missing to complete",
        icon: "error",
      });
    }
  };

  if (idState) {
    return (
      <>
        <div className="carritoVacio">
          <h1> Thank you for purchasing </h1>
          <h2> The ID of your order is: </h2>
          <p> {idState}</p>
          <Link to="/">
            <button className="continueShopping">Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="carritoVacio">
      <h1>Complete the data to finalize the purchase</h1>
      <form onSubmit={guardarDatos}>
        <div className="inputs">
          <input
            id="inputsStyle1"
            required
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={capturarInputs}
            value={user.name}
            className="inputsStyle"
          />
          <input
            id="inputsStyle2"
            required
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={capturarInputs}
            value={user.email}
            className="inputsStyle"
          />
          <input
            id="inputsStyle4"
            required
            type="email"
            name="reemail"
            placeholder="ReEnter email"
            onChange={capturarInputs}
            value={user.reemail}
            className="inputsStyle"
          />
          <input
            id="inputsStyle3"
            required
            type="number"
            name="phone"
            placeholder="Enter number"
            onChange={capturarInputs}
            value={user.phone}
            className="inputsStyle"
          />
          <button className="buy" id="buy" onClick={registro} type="button">
            Buy
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
