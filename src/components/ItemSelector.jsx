
function ItemSelector(props) {
    return(
        <div>
            {props.items.map((element, index) => (
                <button key={index} onClick={() => props.onSelect(element)}>
                    {element}</button>
            ))}
        </div>
    )
}

export default ItemSelector;