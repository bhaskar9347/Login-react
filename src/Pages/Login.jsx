import React, { useState } from "react";
import Success from './Success';
import Fail from "./Fail";
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault();
        // alter(username, password)
        if (password === '123') {
            setStatus(1)
        } else {
            setStatus(2)
        }
    }
    if (status === 1) {
        return (
            <Success />
        );
    }
    if (status === 2) {
        return ( 
            <Fail />
        );
    }
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
            <br></br>
            <label>Password</label>
            <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            <br></br>
            <button>Login</button>
        </form>
        </>
    )
}