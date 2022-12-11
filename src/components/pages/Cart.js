import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <>
    <div className="mb-[228px] my-36">
      {context.cartList.length > 0 &&
        context.cartList.map((product) => (
          <div key={product.idItem} className="m-auto max-w-[500px] h-max flex flex-col p-4 sm:flex-row sm:max-w-[800px]">
            <img src={product.image} className="w-96 h-96 mx-auto sm:m-0 sm:w-52 sm:h-52 mb-5 sm:mb-0 object-cover" />
            <div className="w-52 px-8">
              <h1 className="font-bold text-zinc-700 text-lg">{product.name}</h1>
              <h2 className="m-auto ">${product.precio}</h2>
            </div>
            <div className="w-52 px-8">
              <h3 className="font-bold text-zinc-700 text-lg">Amount</h3>
              <p className="m-auto ">{product.qtyItem}</p>
            </div>
            <div className="w-52 px-8">
              <h3 className="font-bold text-zinc-700 text-lg">Sub total</h3>
              <p className="m-auto ">${product.total}</p>
            </div>
            <button
              className="bg-zinc-800 px-2 text-zinc-200 font-semibold p-3 h-16 sm:h-52 sm:py-0 mx-8 sm:mx-0 my-5 sm:my-0"
              onClick={() => context.deleteItem(product.idItem)}
              >
              Delete
            </button>
          </div>
        ))}
      </div>

      {context.cartList.length > 0 ? (
        <div className="bg-zinc-200 p-14 w-full ">
          <div className="max-w-[1000px] m-auto">
          <h2 className="font-bold text-zinc-700 text-xl">Total ${context.totalItemsPrice().toFixed(2)}</h2>
            <Link to="/form">
            <button className="p-2 bg-emerald-500 rounded-lg w-full my-5 sm:w-44">
              Complete purchase
            </button>
            </Link>
            <button className="flex bg-red-400 p-2 rounded-lg w-full justify-center sm:w-44" onClick={context.removeList}>
              Delete all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-zinc-800 font-bold text-4xl my-2 sm:text-7xl">Your cart is empty</h1>
          <h2 className="text-zinc-800 font-bold text-3xl my-10 sm:text-5xl">Add products to fill it!</h2>
          <Link to="/">
            <button className="text-zinc-800 font-medium text-2xl sm:text-3xl p-2 bg-slate-300 rounded-lg">View all products</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
