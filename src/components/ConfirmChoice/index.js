import React from 'react';
import './styles.css';

function ConfirmChoice ({ show, setClose, message, handleConfirm }){
    return (
        <>
            {show &&
                <div className='container-confirm'>
                    <div className='arrow-up'></div>
                    <span>{message}</span>
                    <button
                        className='btn-actions-confirm blue' 
                        onClick={() => handleConfirm()}
                    >
                        Sim
                    </button>
                    <button
                        className='btn-actions-confirm red' 
                        onClick={() => setClose()}
                    >
                        Não
                    </button>
                </div> 
            
            }
        </>
    );
}

export default ConfirmChoice;

