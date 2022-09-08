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
            <div>
            <button onClick={handleClickMore}>+</button>
            <div>{contador}</div>
            <button onClick={handleClickLess}>-</button>
            <button onClick={onAdd}>Add</button>
            </div>
        </div>
    );
  }

export default ItemCount;