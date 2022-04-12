import React from 'react';
import './styles.css';

function Summary (){
    return (
        <div className="container-summary"> 
            <h3>Resumo</h3>
            <div>
                <span>Entradas</span>
                <strong className='in'>R$ 50,00</strong>
            </div>
            <div>
                <span>Saídas</span>
                <strong className='out'>R$ 20,00</strong>
            </div>
            <div className='horizontal-line'></div>
            <div>
                <span>Saldo</span>
                <strong className='balance'>R$ 30,00</strong>
            </div>
            
            
        </div>
    );
}

export default Summary;

