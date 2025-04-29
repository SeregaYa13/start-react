
import { useState } from "react";

function AddPostForm() {

    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
    
    function handLeSubmit(error) {
        error.preventDefault()
        setLoading(true)
        setError(null)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({title, body}),
            headers: {'Content-type': 'application/json'},

        })
        .then((response) => {
            if(!response.ok) {
                throw new Error('Ошибка при отправке; ' + response.status)
            }
            return response.json()
        })
        .then((data) => {
            console.log('Отправка прошла успешно: ', data)
        } )
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    return (
        <form onSubmit={handLeSubmit}>
            <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            placeholder="=Заголовок"
            />
            <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Текст поста"
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Отправляю..' : 'Отправить'}

            </button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </form>
    );


}

export default AddPostForm;