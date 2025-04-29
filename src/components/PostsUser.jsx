import { useEffect, useState } from "react";

function PostUsers() {
let [post, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

        .then(response => response.json())
        .then(data => setPosts(data))
    },[])

    

    return (
        <ul>
            {post.map(post => (
                <li key={post.id}>
                    <h3>post.title</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>

    );
}

export default PostUsers;