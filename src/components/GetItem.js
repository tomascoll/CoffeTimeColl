import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const GetItem = ({ data }) => {
  const { name, image, precio, cantidad, descripcion, stock } = data;

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
        <ItemCount stock={stock} initial={1} />
        <Link to="/">
          <button className="volverButton">Return</button>
        </Link>
      </div>
    </div>
  );
};

export default GetItem;
