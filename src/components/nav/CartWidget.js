import logo from "../assets/cart.png";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const context = useContext(CartContext)
  return (
    <>
      <div className="flex bg-slate-100 rounded-lg p-1">
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
