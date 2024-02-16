import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AddEmployeeModal.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';


const AddEmployeeModal = ({ isOpen, onRequestClose, authTokens, items}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [vacationStart, setVacationStart] = useState('');
  const [vacationEnd, setVacationEnd] = useState('');


  useEffect(() => {
    if (items) {
      setName(items.name)
      setAddress(items.address)
      setBirthdate(items.birthdate)
      setGender(items.gender)
      setEntryDate(items.entry_date)
      setLeaveDate(items.leave_date)
      setVacationStart(items.vacation_date_start)
      setVacationEnd(items.vacation_date_end)
    }
  }, [items])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(items) {
      try {
        let response = await fetch('http://127.0.0.1:85/employees/' + items.id + '/', {
          method: 'PUT',
          headers:{
              'Content-Type': 'application/json',
              'Authorization':'Bearer ' + String(authTokens)
          },
          body: JSON.stringify({
              name: name, 
              address: address, 
              birthdate: birthdate, 
              gender: gender,
              entryDate: entryDate,
              leaveDate:leaveDate,
              vacationStart:vacationStart,
              vacationEnd:vacationEnd,
          })
        });
        if (response.ok) {
          console.log('Formulário enviado com sucesso!');
          // Feche o modal após o envio bem-sucedido do formulário
          onRequestClose();
        } else {
          console.error('Erro ao enviar o formulário');
        }
      
      }     
      catch (error) {
        console.error('Erro na solicitação:', error);
      }

    } else {    
        try {
          let response = await fetch('http://127.0.0.1:85/employees/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens)
            },
            body: JSON.stringify({
                name: name, 
                address: address, 
                birthdate: birthdate, 
                gender: gender,
                entryDate: entryDate,
            })
          });
          if (response.ok) {
            console.log('Formulário enviado com sucesso!');
            // Feche o modal após o envio bem-sucedido do formulário
            onRequestClose();
          } else {
            console.error('Erro ao enviar o formulário');
          }
        
        }     
        catch (error) {
          console.error('Erro na solicitação:', error);
        }
  }

  };

  

  const handleSelect = (option) => {
    setGender(option);
  };

  return (
    <Modal
      className='modal-container'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formulário Modal"
    >
      <h2>Preencha o formulário</h2>
      <form className='modal-form' onSubmit={handleSubmit}>
        <div className='modal-group'>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className='modal-group'>
          <label>
            Endereço:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div className='modal-group'>
          <label>
            Data de nascimento:
            <input
              type="text"
              value={birthdate}
              placeholder='yyyy-mm-dd'
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
        </div>
        <div className='modal-group'>
            <Dropdown onSelect={handleSelect}>
                <DropdownButton title={gender ? gender : "Gênero"}>
                    <Dropdown.Item eventKey="M">Masculino</Dropdown.Item>
                    <Dropdown.Item eventKey="F">Feminino</Dropdown.Item>
                    <Dropdown.Item eventKey="O">Outro</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
        </div>
        <div className='modal-group'>
          <label>
            Funcionário desde:
            <input
              type="text"
              value={entryDate}
              placeholder='yyyy-mm-dd'
              onChange={(e) => setEntryDate(e.target.value)}
            />
          </label>
        </div>
        { items ? (
          <div>
            <div className='modal-group'>
              <label>
                Funcionário até:
                <input
                  type="text"
                  value={leaveDate}
                  placeholder='yyyy-mm-dd'
                  onChange={(e) => setLeaveDate(e.target.value)}
                />
              </label>
            </div>
            <div className='modal-group'>
              <label>
                Início das férias:
                <input
                  type="text"
                  value={vacationStart}
                  placeholder='yyyy-mm-dd'
                  onChange={(e) => setVacationStart(e.target.value)}
                />
              </label>
            </div>
            <div className='modal-group'>
              <label>
                Final das férias:
                <input
                  type="text"
                  value={vacationEnd}
                  placeholder='yyyy-mm-dd'
                  onChange={(e) => setVacationEnd(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Atualizar</button>
          </div>
        ) 
        : 
        (<button type="submit">Enviar</button>)}
        
      </form>
    </Modal>
  );
};

export default AddEmployeeModal;
