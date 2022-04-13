import React, { useEffect, useState } from 'react';
import './styles.css';
import { formatToMoney } from '../../utils/formatters';

function Summary ({ transactions }){
    const [summary, setSummary] = useState({
        credit: 0, 
        debit: 0, 
        balance: 0 
    })

    useEffect(() => {
        const sumCredit = transactions.reduce((acc, item) => {
            return item.type === 'credit' ? acc + Number(item.value) : acc + 0;
        }, 0);
        const sumDebit = transactions.reduce((acc, item) => {
            return item.type === 'debit' ? acc + Number(item.value) : acc + 0;
        }, 0);

        setSummary({ 
            credit: sumCredit, 
            debit: sumDebit,
            balance: sumCredit - sumDebit
        });

    }, [transactions]);

    return (
        <div className="container-summary"> 
            <h3>Resumo</h3>
            <div>
                <span>Entradas</span>
                <strong className='in'>{formatToMoney(summary.credit)}</strong>
            </div>
            <div>
                <span>Saídas</span>
                <strong className='out'>{formatToMoney(summary.debit)}</strong>
            </div>
            <div className='horizontal-line'></div>
            <div>
                <span>Saldo</span>
                <strong className='balance'>{formatToMoney(summary.balance)}</strong>
            </div>
            
            
        </div>
    );
}

export default Summary;

