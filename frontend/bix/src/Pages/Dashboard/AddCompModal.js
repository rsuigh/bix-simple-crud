import React, { useState } from 'react';
import Modal from 'react-modal';
import './AppCompModal.css'

const AddCompModal = ({ isOpen, onRequestClose, authTokens}) => {
  const [compname, setCompName] = useState('');
  const [address, setAddress] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch('http://127.0.0.1:85/companies/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens)
        },
        body: JSON.stringify({name: compname, address: address})
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
              value={compname}
              onChange={(e) => setCompName(e.target.value)}
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
        <br />
        <button type="submit">Enviar</button>
      </form>
    </Modal>
  );
};

export default AddCompModal;
