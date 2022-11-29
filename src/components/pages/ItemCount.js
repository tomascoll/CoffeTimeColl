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
      <div className="flex justify-around p-5 max-w-[630px] m-auto">
        <button className="w-10 h-10 bg-zinc-700 text-zinc-100  rounded-lg" onClick={handleClickMore}>
          +
        </button>
        <div className="py-2 text-xl">{contador}</div>
        <button className="w-10 h-10 bg-zinc-700 text-zinc-100  rounded-lg" onClick={handleClickLess}>
          -
        </button>
        {stock && contador ? (
          <button className="bg-zinc-700 w-20 h-10 text-zinc-200 font-semibold rounded-lg" onClick={()=> onAdd(contador)}>
            Add
          </button>
        ) : (
          <button className="bg-zinc-200 w-28 h-10 font-semibold rounded-lg" disabled>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
