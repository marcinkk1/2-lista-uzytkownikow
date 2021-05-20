import React from 'react';
import './UsersList.css';

function UserList(props) {

    let userList = props.userList;
    let usersLiElements = userList.map((user) => {
        return <li key={user.id}>{user.name} {user.id}<span onClick={() => props.removeUserMethod(user.id)}>X</span></li>
    })

    return(
        <ul className="the-list"> 
            {usersLiElements}
        </ul>
    );
}

export default UserList;