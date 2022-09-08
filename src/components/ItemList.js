import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {
            items.map(items => <Item key={items.id} name={items.name} image={items.image} precio={items.precio} cantidad={items.cantidad} />)
        }
        </>
    );
}

export default ItemList;