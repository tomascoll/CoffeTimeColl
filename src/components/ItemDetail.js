import GetItem from "./GetItem";

const ItemDetail = ({ items }) => {
    return (
        <>
            <GetItem key={items.id} data={items} />
        </>
    );
}

export default ItemDetail;