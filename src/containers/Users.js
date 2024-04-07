import React, {useState} from "react";

function Users() {
    const[users, setUsers] = useState([
        { name: 'Ayush', age: 21 },
        { name: 'Ram', age: 23}
    ])
    return (
        <div>
            <h2>users</h2>
            <ul>
                {
                    users.map((user, index) => {
                        return <li>{user.name}, {user.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;