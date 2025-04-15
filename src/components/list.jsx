function ItemList(props) {
    return (
<ul>
    {props.items.map((element, index) => (
        <li key={index}>{element}</li>
    ))}
</ul>
    );
}

export default ItemList;