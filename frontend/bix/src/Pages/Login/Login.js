import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import './Login.css';  


const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    
    return (
        <div className='login-container'>
            <form className="login-form" onSubmit={loginUser}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <input type="submit"/>
            </form>
        </div>
        );
}

export default LoginPage