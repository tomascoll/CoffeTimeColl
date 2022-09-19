import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const GetItem = ({ data }) => {
  const { name, image, precio, cantidad, descripcion, stock } = data;
  const [itemCount, setItemCount] = useState(0);
  
  const onAdd = (item) => {
    alert((item) + " products added");
    setItemCount(item);
  };

  return (
    <div className="FondoDetail">
      <img className="imgCardDetail" src={image} />
      <div className="datos">
        <h1 className="tituloDetail">{name}</h1>
        <p className="descripcionDetail">{descripcion}</p>
        <ul className="listaDetail">
          <li className="precioDetail">Price : {precio}</li>
          <li className="cantidadDetail">Amount : {cantidad}</li>
          <li>Stock : {stock}</li>
        </ul>
        {itemCount === 0 ? (
          <ItemCount stock={stock} initial={itemCount} onAdd={onAdd} />
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

export default GetItem;
