import logo from "../assets/cart.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const context = useContext(CartContext)
  return (
    <>
      <div className="Carrito">
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
