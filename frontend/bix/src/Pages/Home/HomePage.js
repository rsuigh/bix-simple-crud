import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Person } from 'react-bootstrap-icons';
import { PersonFillGear } from 'react-bootstrap-icons';





const HomePage = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    let [user, setUser] = useState([])
    const[companyActions, setCompanyActions] = useState([])
    const[employeeActions, setEmployeeActions] = useState([])



    useEffect(() => {
        getRole()
        getRecentEmployeeActions()
        getRecentCompanyActions()
    },[])

    const getRole = async() => {
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

    const getRecentEmployeeActions = async() => {
        let response = await fetch('http://127.0.0.1:85/api/recent_actions/employee', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        let data = await response.json()
        if(response.status === 200){
            setEmployeeActions(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    const getRecentCompanyActions = async() => {
        let response = await fetch('http://127.0.0.1:85/api/recent_actions/company', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        let data = await response.json()
        if(response.status === 200){
            setCompanyActions(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    const handleWords = (word) => {
        const wordList = {
            'created': 'se juntou a nós',
            'deleted': 'desligado(a)',
            'edited': 'editado(a)',
        }
        const substituteWord = wordList[word] || word

        return substituteWord
    }
    return (
        <div className='home-container'>
            <p>Você está na Home Page!</p>
            {user.is_superuser ? (
                <PersonFillGear size={100}></PersonFillGear>
            ) : (
                <Person size={100}></Person>
                
            )}
            <p>Name: {user.username}</p>
            
            <p>Ir para o <Link to='/d'>Dashboard</Link></p>

            <h2>Ações Recentes (Funcionários)</h2>
            {employeeActions.slice(0,2).map((item, index) => 
                 <p key={index}>Funcionário(a) {item.employee_name} {handleWords(item.action)} no dia {item.timestamp.slice(0, 10)}</p>
            )}

            <h2>Ações Recentes (Empresas)</h2>
            {companyActions.slice(0,2).map((item, index) => 
                 <p key={index}>Empresa {item.company_name} {handleWords(item.action)} no dia {item.timestamp.slice(0, 10)}</p>
            )}
            
        </div>
    )
}

export default HomePage