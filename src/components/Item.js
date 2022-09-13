import React from "react";

const Item = ({data}) =>{

    const {name, image, precio, cantidad} = data;

    return(
        <div className="Fondo">
            <img className="imgCard" src={image}/>
            <h1>{name}</h1>
            <h2>{precio}</h2>
            <h3>{cantidad}</h3>
            <button>Ver mas</button>
        </div>
    )
}

export default Item;