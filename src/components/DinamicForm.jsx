import { useState } from "react";


function DynamicForm () {
    let [fields, setFields] = useState([{id: 1, value: ''}])

    let addField = () => setFields([...fields, {id: Date.now(), value: ''}])

        let removeField = (id) => setFields(fields.filter(element => element.id !== id))

            let updateField = (id, value) => setFields(
            fields.map(element => element.id === id ? {...element, value} : element))

    return (
        <form>
            {fields.map(field => (
                <div key={field.id}>
                    <input type="text" 
                    value={field.value}
                    onChange={(event) => updateField(field.id, event.target.value)}
                    />
                    <button type="button" onClick={() => removeField(field.id)}>Удалить</button>
                </div>
            ))}
            <button type="button" onClick={addField}>Добавить поле</button>
        </form>

    );
}
export default DynamicForm;