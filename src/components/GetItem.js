import React from "react";
import ItemCount from './ItemCount'

const GetItem = ({data}) =>{

    const {name, image, precio, cantidad, descripcion,stock} = data;

    return(
        <div className="FondoDetail">
            <img className="imgCardDetail" src={image}/>
            <div className="datos">
                <h1 className="tituloDetail">{name}</h1>
                <h2 className="precioDetail">{precio}</h2>
                <p className="descripcionDetail">{descripcion}</p>
                <h3 className="cantidadDetail">{cantidad}</h3>
                <ItemCount stock={stock} initial={1}/>
                <button className="volverButton">Volver</button>
            </div>
        </div>
    )
}

export default GetItem;