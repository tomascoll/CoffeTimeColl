import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { name, image, id, tipo } = data;

  return (
    <div className="Fondo">
      <img className="imgCard" src={image} />
      <div className="infoCard">
        <h1 className="nameCard">{name}</h1>
        <p className="tipoCard">{tipo}</p>
        <Link to={`/item/${id}`}>
          <button className="botonCard">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
