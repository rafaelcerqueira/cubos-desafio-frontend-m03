import React from 'react';
import './styles.css';
import addIcon from '../../assets/add-icon.svg'
import removeIcon from '../../assets/remove-icon.svg'

function Chip ({ 
    title, selected, 
    handleSelectChip
}){
    return (
        <div 
            className={`container-chip ${selected && 'selected-chip'}`}
            onClick={() => handleSelectChip(title)}
        > 
            <span>{title}</span>
            <img
                className='icon-chip' 
                src={selected ? removeIcon : addIcon} 
                alt="chip icon" 
            />
        </div>
    );
}

export default Chip;

