import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
  const [Cafes, setCafes] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setCafes(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="max-w-[1000px] m-auto p-2 flex flex-wrap">
      <ItemList items={Cafes} />
    </div>
  );
};

export default ItemListContainer;
