import logo from "../assets/cart.png";

const CartWidget = () => {
  return (
    <>
      <div className="Carrito">
        <div className="numeroCarrito">7</div>
        <img className="logoCarrito" src={logo} />
      </div>
    </>
  );
};

export default CartWidget;
