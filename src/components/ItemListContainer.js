import React, { useState, useEffect } from "react";
import customFetch from "./customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { db } from "./fireBaseConfig";
import { firestoreFetch } from "./firestoreFetch";

const ItemListContainer = () => {
  const [Cafes, setCafes] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setCafes(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="Gallery">
      <ItemList items={Cafes} />
    </div>
  );
};

export default ItemListContainer;
