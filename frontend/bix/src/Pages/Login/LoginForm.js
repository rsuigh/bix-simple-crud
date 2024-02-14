import React, { useState } from 'react';
import './LoginForm.css';  // Importe o arquivo de estilos


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
  };

  return (
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
  );
};

export default LoginForm;