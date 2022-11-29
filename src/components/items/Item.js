import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { name, image, id, tipo } = data;

  return (
    <div className="max-w-[300px] m-auto p-2">
      <img className="object-cover" src={image} />
      <div className="infoCard">
        <h1 className="font-bold text-lg text-zinc-700">{name}</h1>
        <p className="text-zinc-600">{tipo}</p>
        <Link to={`/item/${id}`}>
          <button className="p-2 bg-emerald-900 font-medium text-stone-200 my-2">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
