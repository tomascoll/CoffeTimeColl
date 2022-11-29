import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState , useContext} from "react";
import { CartContext } from "../context/CartContext";
import NotFound from "./NotFound";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addItem} = useContext(CartContext)
  
  const onAdd = (qty) => {
    setItemCount(qty);
    addItem(data, qty)
  };
  
  if (data == null){
    return (
      <NotFound/>
    )
  }
  
  return (
    <div className="max-w-[1000px] m-auto flex flex-col lg:flex-row p-3">
      <img className="object-cover" src={data.image} />
      <div className="p-2">
        <h1 className="p-2 font-bold text-lg text-zinc-700">{data.name}</h1>
        <p className="p-2 text-zinc-600 mb-5">{data.descripcion}</p>
        <ul className="flex justify-around bg-zinc-200 p-2 rounded-lg m-auto my-5">
          <li className="precioDetail">Price : ${data.precio}</li>
          <li className="cantidadDetail">Amount : {data.cantidad}</li>
          <li>Stock : {data.stock}</li>
        </ul>
        {itemCount === 0 ? (
          <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="checkoutBoton">
            <button className="bg-emerald-800 p-3 rounded-xl text-zinc-200 font-semibold m-2 w-28">Check out</button>
          </Link>
        )}
        <Link to="/">
          <button className="bg-emerald-900 p-3 rounded-xl text-zinc-200 font-semibold m-2 w-28 flex justify-center" >Return</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;