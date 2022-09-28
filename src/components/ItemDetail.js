import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState , useContext} from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addItem} = useContext(CartContext)
  
  const onAdd = (qty) => {
    setItemCount(qty);
    addItem(data, qty)
  };

  return (
    <div className="FondoDetail">
      <img className="imgCardDetail" src={data.image} />
      <div className="datos">
        <h1 className="tituloDetail">{data.name}</h1>
        <p className="descripcionDetail">{data.descripcion}</p>
        <ul className="listaDetail">
          <li className="precioDetail">Price : ${data.precio}</li>
          <li className="cantidadDetail">Amount : {data.cantidad}</li>
          <li>Stock : {data.stock}</li>
        </ul>
        {itemCount === 0 ? (
          <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="checkoutBoton">
            <button className="agregarCarrito">Check out</button>
          </Link>
        )}
        <Link to="/" className="retunrLink">
          <button className="volverButton">Return</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;