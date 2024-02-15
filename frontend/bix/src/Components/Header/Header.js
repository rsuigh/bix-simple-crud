import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import './Header.css';  



const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)

    return (
        <div className='header-container'>
            <Link to="/" >Home</Link>
            <span> | </span>
            {user ? (
                <Link onClick={logoutUser}>Logout</Link>
            ) : (
                <Link to="/login" >Login</Link>
            )}
            {user && <p>Olá {user.username}!</p>}

        </div>
    )
}

export default Header