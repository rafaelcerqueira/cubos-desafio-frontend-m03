import React from 'react';
import deletetIcon from '../../../assets/delete-icon.svg';
import editIcon from '../../../assets/edit-icon.svg';
import './styles.css';
import TableHeader from './TableHeader';


function TransactionList (){
    return (
        <div className="table">
            <TableHeader />
            <div className="table-body">
                <div className="table-line">
                    <div className="line-items">01/01/22</div>
                    <div className="line-items">Segunda-feira</div>
                    <div className="line-items">Venda de canecas</div>
                    <div className="line-items">Pix</div>
                    <div className="line-items">R$ 150,00</div>
                    <div className="line-items">
                        <img src={editIcon} alt="edit icon"/>
                        <img src={deletetIcon} alt="delete icon"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TransactionList;