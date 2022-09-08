import React from "react";

const ItemList = (props) =>{
    return(
        <div className="Fondo">
            <img className="imgCard" src={props.image}/>
            <h1>{props.name}</h1>
            <h2>{props.precio}</h2>
            <h3>{props.cantidad}</h3>
            <button>Ver mas</button>
        </div>
    )
}

export default ItemList;