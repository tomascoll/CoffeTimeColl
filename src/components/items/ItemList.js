import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((items) => (
        <Item key={items.id} data={items} />
      ))}
    </>
  );
};

export default ItemList;
