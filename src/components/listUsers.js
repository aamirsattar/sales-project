import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

export default function ListUser() {
    const [users, setUsers] = useState([])
    const [token, setToken] = useState([])

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        axios.get('http://localhost:5000/listUsers')
        .then(res => setUsers(res.data))
    }, [])

    if(token && token !== undefined && token !== ""){
        return(
            <>
            <h4>Users</h4>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {users.map(user => {
                    return (
                        <tr>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>     
                    )
                })}
            </table>
            
            </>
        )
    }else {
        window.location = '/login'
    }
    
}