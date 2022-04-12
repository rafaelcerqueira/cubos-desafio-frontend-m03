import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header';
import TransactionList from '../../components/Header/TransactionsList';
import ModalStorageTransactions from '../../components/ModalStorageTransactions';
import Summary from '../../components/Summary';
import './styles.css';


function Main() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionList />
        <div>
          <Summary />
          <button 
            className='btn-add-register'
            onClick={() => setOpen(true)}
          >
            Adicionar Registro
          </button>
        </div>
      </main>
       
      <ModalStorageTransactions 
        open={open}
        setOpen={setOpen}
      />
      
    </div>
  );
}

export default Main;
