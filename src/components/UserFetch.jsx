import { useEffect, useState } from "react";

function UserFetch() {
 let [users, setUsers] = useState([])

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    
 },[])

 

    return (
        <ul style={{
            listStyleType: 'none',
            padding: 0
        }}>
            {users.map(user => (
               <li key={user.id}>{user.name}</li> 
            )

            )}
        </ul>
    );


    
}

export default UserFetch;