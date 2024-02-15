import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import AddCompModal from './AddCompModal';
import AddEmployeeModal from './AddEmployeeModal';



const Dashboard = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    let [user, setUser] = useState([])
    let [employees, setEmployees] = useState([])
    let [companies, setCompanies] = useState([])

    const [openModal, setOpenModal] = useState(false);

    const letModalOpen = () => {
        setOpenModal(true);
    };

    const letModalClose = () => {
        getCompanies();
        getEmpoyees();
        setOpenModal(false);
    };


    useEffect(() => {
        getUser();
        getCompanies();
        getEmpoyees();
    },[])

    const getUser = async() => {
        fetch('http://127.0.0.1:85/api/is_staff/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        .then((response) => response.json())
        .then((user_data) => {
            setUser(user_data)
        })
    }

    const getEmpoyees = async() => {
        fetch('http://127.0.0.1:85/employees/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        .then((response) => response.json())
        .then((emp_data) => {
            setEmployees(emp_data)
            
        })
    }

    const getCompanies = async() => {
        
        fetch('http://127.0.0.1:85/companies/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        .then((response) => response.json())
        .then((comp_data) => {
            setCompanies(comp_data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    

    return (
        <div className='dashboard-container'>
            {user.is_superuser ? (
                <div>
                    <button onClick={letModalOpen}>Adicionar Empresa</button>

                    <AddCompModal isOpen={openModal} onRequestClose={letModalClose} authTokens={authTokens.access}/>
                    <p>Lista de Empresas</p>
                </div>
                
            ):(<p>Lista de Empresas</p>)}
            
            <div>
                <ul>
                    {companies.map((items, index) => 
                        <li key={index}>Empresa: {items.name} Endereço: {items.address}</li>
                    )}
                </ul>
            </div>
            {user.is_superuser ? (
                <div>
                    <button onClick={letModalOpen}>Adicionar Funcionário</button>

                    <AddEmployeeModal isOpen={openModal} onRequestClose={letModalClose} authTokens={authTokens.access}/>
                    <p>Lista de Funcionários</p>
                </div>
            ):(<p>Lista de Funcionários</p>)}
            <div>
                <ul>
                    {employees.map((items, index) => 
                        <li key={index}>Nome: {items.name} Endereço: {items.address} Funcionário desde: {items.entryDate}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard