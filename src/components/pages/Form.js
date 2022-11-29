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
        <div className="flex h-[500px] justify-center flex-col items-center sm:h-[800px] p-3">
          <h1 className="text-zinc-800 font-bold text-4xl my-2 md:text-7xl text-center"> Thank you for purchasing </h1>
          <h2 className="text-zinc-800 font-bold text-3xl my-10 md:text-5xl text-center"> The ID of your order is: </h2>
          <p className="text-zinc-700 text-2xl sm:text-2xl p-2 bg-slate-200 rounded-lg"> {idState}</p>
          <Link to="/">
            <button className="text-zinc-200 font-semibold text-xl my-10 sm:text-2xl p-2 bg-slate-800 rounded-lg">Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-[600px] m-auto p-5">
      <h1 className="py-5 text-zinc-700 font-semibold text-lg">Complete the data to finalize the purchase</h1>
      <form onSubmit={guardarDatos}>
        <div className="flex flex-col gap-10">
          <input
            id="inputsStyle1"
            required
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={capturarInputs}
            value={user.name}
            className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          />
          <input
            id="inputsStyle2"
            required
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={capturarInputs}
            value={user.email}
            className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          />
          <input
            id="inputsStyle4"
            required
            type="email"
            name="reemail"
            placeholder="ReEnter email"
            onChange={capturarInputs}
            value={user.reemail}
            className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          />
          <input
            id="inputsStyle3"
            required
            type="number"
            name="phone"
            placeholder="Enter number"
            onChange={capturarInputs}
            value={user.phone}
            className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          />
          <button className="bg-emerald-800 p-3 rounded-lg font-semibold text-zinc-200" id="buy" onClick={registro} type="button">
            Buy
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
