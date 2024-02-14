import React, { useState } from 'react';
import './Login.css';  

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Lógica de autenticação aqui
    }
    return (
    <div className='login-container'>
        <form className="login-form">
            <div className="form-group">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </form>
    </div>
    );
};

export default LoginPage;