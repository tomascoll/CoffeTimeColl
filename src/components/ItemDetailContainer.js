import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {firestoreFetchOne} from './firestoreFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [Cafes, setCafes] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setCafes(result))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="Gallery">
      <ItemDetail data={Cafes} />
    </div>
  );
};

export default ItemDetailContainer;