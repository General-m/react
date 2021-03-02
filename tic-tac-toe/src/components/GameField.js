import React from 'react';
import Cell from './Cell'

export default function GameField({ cells, onClick, onChange }) {
    return (
        <div className='game__field' >
            {
                cells.map((item, index) => (
                    <Cell key={index} value={item} onClick={() => onClick(index)} onChange={() => onChange(index)} />
                ))
            }
        </div>

    )
}
