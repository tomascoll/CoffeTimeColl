import { useState } from "react";

const ItemCount = () => {
    let stock = 5;
    let ini = 1;
    const [rate,setRate] = useState(1)

    const handleClickMore = () =>{
        if (rate < stock){
            setRate(rate+1)
        }
    }
    const handleClickLess = () =>{
        if (rate > ini){
            setRate(rate-1)
        }
    }
    const onAdd = () =>{
        alert('Selecciono '+ rate +' productos' )
    }

    return(
        <div>
            <div className="caja">
            <button onClick={handleClickMore} className='boton'>+</button>
            <div className='rate'>{rate}</div>
            <button onClick={handleClickLess} className='boton'>-</button>
            <button onClick={onAdd} className='add'>Add</button>
            </div>
        </div>
    );
  }

export default ItemCount;