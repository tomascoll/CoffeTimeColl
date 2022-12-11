import logo from "../assets/cart.png";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const context = useContext(CartContext)
  return (
    <>
      <div className="sm:py-0 p-2 py-5 rounded-lg hover:bg-slate-100 my-1 w-full flex justify-center">
        {context.cartList.length > 0 ?(
          <div className="numeroCarrito">{context.totalWidget()}</div>
        ) : (
          null
        )
        }
        <img className="logoCarrito" src={logo} />
      </div>
    </>
  );
};

export default CartWidget;
