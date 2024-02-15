import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './HomePage.css';



const HomePage = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    let [user, setUser] = useState([])
    let [employees, setEmployees] = useState([])
    let [companies, setCompanies] = useState([])


    useEffect(() => {
        getUser()
    },[])

    const getUser = async() => {
        let response = await fetch('http://127.0.0.1:85/api/is_staff/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        let data = await response.json()
        if(response.status === 200){
            setUser(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }


    return (
        <div className='home-container'>
            <p>Você está na Home Page!</p>
            <p>Name: {user.username}</p>
            
            {user.is_superuser ? (
                <p>é admin</p>
            ) : (
                <p>não é admin</p>
            )}
            <p>Ir para o <Link to='/d'>Dashboard</Link></p>
            
        </div>
    )
}

export default HomePage