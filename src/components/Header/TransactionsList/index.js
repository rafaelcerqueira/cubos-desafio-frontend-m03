import React, { useState } from 'react';
import deletetIcon from '../../../assets/delete-icon.svg';
import editIcon from '../../../assets/edit-icon.svg';
import './styles.css';
import TableHeader from './TableHeader';
import { formatToMoney, capitalizeWord, formatToDate } from '../../../utils/formatters';
import ConfirmChoice from '../../ConfirmChoice';


function TransactionList ({ 
    transactions, 
    setCurrentTransaction, 
    reload, 
    setReload
 }){
    const [idItemDelete, setIdItemDelete] = useState(null);

    async function handleDeleteItem (){
        await fetch(`http://localhost:3334/transactions/${idItemDelete}`, {
            method: 'DELETE'
        });

        setIdItemDelete(null);
        setReload(!reload);
    }

    return (
        <div className="table">
            <TableHeader />
            <div className="table-body">
                {transactions.map((item) => (
                    <div className="table-line" key={item.id}>
                        <div className="line-items">{formatToDate(item.date)}</div>
                        <div className="line-items">{capitalizeWord(item.week_day)}</div>
                        <div className="line-items">{item.description}</div>
                        <div className="line-items">{item.category}</div>
                        <div 
                            className="line-items value-item"
                            style={{color: item.type === 'credit' ? '#7B61FF' : '#FA8C10'}}
                        >
                            {formatToMoney(item.value)}
                        </div>
                        <div className="line-items">
                            <img 
                                src={editIcon} 
                                alt="edit icon"
                                className='action-button'
                                onClick={() => setCurrentTransaction(item)}
                            />
                            <img 
                                src={deletetIcon} 
                                alt="delete icon"
                                className='action-button'
                                onClick={() => setIdItemDelete(item.id)}
                            />
                            <ConfirmChoice 
                                show={item.id === idItemDelete}
                                setClose={() => setIdItemDelete(null)}
                                message='Apagar item?'
                                handleConfirm={ ()  => handleDeleteItem()}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionList;