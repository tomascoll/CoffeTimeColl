import React from "react";
import { useEffect } from "react";

const Cafe = (props) =>{
    return(
        <div className="Fondo">
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <h2>{props.precio}</h2>
            <h3>{props.cantidad}</h3>
            <button>Ver mas</button>
        </div>
    )
}

export default Cafe;