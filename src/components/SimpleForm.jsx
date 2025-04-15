import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [isTrue, setIsTrue] = useState(false)
    return (
        <form>
            <input
            value={name}
            placeholder='Напишите имя'
            onChange={(event) => setName(event.target.value)}/>
            <input
            type='number'
            value={age}
            placeholder="Напишите возраст"
            onChange={(event) => setAge(event.target.value)}/>
            <input
            type='checkbox'
            checked={isTrue}
            onChange={(event) => setIsTrue(event.target.checked)}/>

            <div>
                <span
                style={{
                    display: 'inline-block',
                    margin: '5px'
                }}
                >Введенное имя: {name}</span>

                <span>Введенный возраст</span>

                <span>Хрень</span>
            </div>
        </form>

    )
}

export default SimpleForm;