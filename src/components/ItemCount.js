import { useState } from "react";

const ItemCount = ({stock,initial}) => {

    const [contador,setContador] = useState(initial)

    const handleClickMore = () =>{
        if (contador < stock){
            setContador(contador+1)
        }
    }
    const handleClickLess = () =>{
        if (contador > initial){
            setContador(contador-1)
        }
    }
    const onAdd = () =>{
        alert('Selecciono '+ contador +' productos' )
    }

    return(
        <div>
            <div className="esquemaCount">
            <button className="boton" onClick={handleClickMore}>+</button>
            <div className="numeroProducto">{contador}</div>
            <button className="boton" onClick={handleClickLess}>-</button>
            <button className="agregarCarrito" onClick={onAdd}>Add</button>
            </div>
        </div>
    );
  }

export default ItemCount;