import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import './Dashboard.css';
import AddCompModal from './AddCompModal';
import AddEmployeeModal from './AddEmployeeModal';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { PencilSquare, XCircleFill } from 'react-bootstrap-icons';
import Alert from 'react-bootstrap/Alert';







const Dashboard = () => {
    const { authTokens } = useContext(AuthContext);
    let [user, setUser] = useState([]);
    let [employees, setEmployees] = useState([]);
    let [companies, setCompanies] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [openModalEmployee, setOpenModalEmployee] = useState(false);
    const [modalDataItems, setModalDataItems] = useState(null);
    const [modalEmpDataItems, setModalEmpDataItems] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [compId, setCompId] = useState(null);
    const [empId, setEmpId] = useState(null);
    const [obj, setObj] = useState(null);

    const letModalOpen = (items) => {
        setModalDataItems(items)
        setOpenModal(true);
    };
    const letModalClose = () => {
        setModalDataItems(null)
        getCompanies();
        setOpenModal(false);
    };

    const letModalOpenEmployee = (items) => {
        setModalEmpDataItems(items)
        setOpenModalEmployee(true);
    };

    const letModalCloseEmployee = () => {
        setModalEmpDataItems(null)
        getEmpoyees();
        setOpenModalEmployee(false);
    };


    useEffect(() => {
        getUser();
        getCompanies();
        getEmpoyees();
    },[showAlert])

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

    const handleShowAlert = (obj, id, name) => {
        if (obj === 'company') {
            setCompId(id)
            setObj(obj)
            setShowAlert(true);
        } else {
            setEmpId(id)
            setObj(obj)
            setShowAlert(true);
        }
    }
    const handleHideAlert = () => {
        getCompanies();
        getEmpoyees();
        setCompId(null)
        setEmpId(null)
        setShowAlert(false);
    }
    const handleYesAlert = () => {
        if (obj==='company'){
            deleteCompany(compId)
            getCompanies();
        } else {
            deleteEmployee(empId)
            getEmpoyees();
        }
        setShowAlert(false)
    }

    const deleteCompany = async (id) => {
        fetch('http://127.0.0.1:85/companies/delete/'+ id +'/', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        .then(getCompanies())
        .catch((error)=>{
            console.log(error)
        })
    }

    const deleteEmployee = async (id) => {
        fetch('http://127.0.0.1:85/employees/delete/'+ id +'/', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        .then(getEmpoyees())
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <div >
            {user.is_superuser ? (
                <div className='dashboard-top'>
                    <Button onClick={() => letModalOpen()}>Adicionar Empresa</Button>
                    <h2>Lista de Empresas</h2>
                </div>
            ):(<h2 className='dashboard-top'>Lista de Empresas</h2>)}
            <div className='dashboard-list'> 
                <ListGroup >
                    {companies.map((items, index) => 
                        <ListGroup.Item key={index} className="d-flex justify-content">
                             
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    Nome: {items.name} 
                                </div>
                                Endereço: {items.address}
                            </div>
                                {user.is_superuser ? (
                                    <div className="justify-content-between">
                                        <div><PencilSquare title={'Editar'} onClick={() => letModalOpen(items)}></PencilSquare></div>
                                        <div><XCircleFill title={'Excluir'} color='red' onClick={() => handleShowAlert('company', items.id)}></XCircleFill></div>
                                    </div>
                                ):("")}
                        </ListGroup.Item >
                    )}
                </ListGroup>
            </div>
            {user.is_superuser ? (
                <div className='dashboard-top'>
                    <Button onClick={() => letModalOpenEmployee()}>Adicionar Funcionário</Button>
                    <h2>Lista de Funcionários</h2>
                </div>
            ):(<h2 className='dashboard-top'>Lista de Funcionários</h2>)}
            <div className='dashboard-list'>
            <ListGroup >
                    {employees.map((items, index) => 
                        <ListGroup.Item key={index} className="d-flex justify-content">
                             
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    Nome: {items.name} 
                                </div>  
                                Endereço: {items.address}
                            </div>
                            {user.is_superuser ? (
                                <div className="justify-content-between">
                                    <div><PencilSquare title={'Editar'} onClick={() => letModalOpenEmployee(items)}></PencilSquare></div>
                                    <div><XCircleFill title={'Excluir'} color='red' onClick={() => handleShowAlert('employee', items.id)}></XCircleFill></div>
                                </div>
                            ):("")}
                        </ListGroup.Item >
                    )}
                </ListGroup>
                
            </div>
            <AddCompModal 
                isOpen={openModal} 
                onRequestClose={letModalClose} 
                authTokens={authTokens.access}
                items={modalDataItems}
            />
            <AddEmployeeModal 
                isOpen={openModalEmployee} 
                onRequestClose={letModalCloseEmployee} 
                authTokens={authTokens.access}
                items={modalEmpDataItems}
            />

            <Alert 
                show={showAlert} 
                variant="dark" 
                onClose={handleHideAlert} 
                style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                <Alert.Heading>Deseja Excluir?</Alert.Heading>
                <p>
                    Esta ação é irreversível
                </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <Button onClick={handleYesAlert} variant="outline-success">
                        Sim
                    </Button>
                    <Button onClick={handleHideAlert} variant="outline-danger">
                        Fechar
                    </Button>
                </div>
            </Alert>
        </div>
    )
}

export default Dashboard