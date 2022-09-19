import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(initial);
  }, []);

  const handleClickMore = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleClickLess = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div className="esquemaCount">
        <button className="boton" onClick={handleClickMore}>
          +
        </button>
        <div className="numeroProducto">{contador}</div>
        <button className="boton" onClick={handleClickLess}>
          -
        </button>
        {stock && contador ? (
          <button className="agregarCarrito" onClick={()=> onAdd(contador)}>
            Add
          </button>
        ) : (
          <button className="agregarCarritoDisabled" disabled>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
