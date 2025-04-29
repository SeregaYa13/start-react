
import { useState, useRef } from "react";

function DragAndDrop () {
    let [items, setItems] = useState(['яблоко', 'бананы', 'апельсины', 'клубника'])
    let dragItem = useRef(null)
    let dragOverItem = useRef(null)

    function handSort() {
        let newItems = [...items];
        let deletItem = newItems.splice(dragItem,1)[0]
        newItems.splice(dragItem.current, 0, deletItem)
          setItems(newItems)
    }
    return (
<div>
    <h2>Список с ручной сортировкой</h2>
    <ul>
        {items.map((item, index) => (
            <li
                key={index}
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handSort}
                onDragOver={(event) => event.preventDefault()}
                draggable
                style={{
                    cursor: 'move',
                    padding: '10px',
                    margin: '5px',
                    listStyleType: 'none',
                    backgroundColor: '#765489',
                    color: '#fff'
                }}
                >
                {item}
            </li>
        )
        )}
    </ul>
</div>
    );
}

export default DragAndDrop;