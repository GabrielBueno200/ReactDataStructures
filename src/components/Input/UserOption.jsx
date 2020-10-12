import React from 'react';
import './UserOption.css'


export default props => 
    <div className={`${props.operation} option`}>

        <input name= {props.operation}
               type="number" 
               value={!props.value ? '' : props.value}
               onChange={e => props.change(e.target.value)} 
               placeholder = {`Element to ${props.operation}`}
        />

        <button onClick={() => props.click(parseInt(props.value))} 
                disabled={!props.value}>
            {props.operation} 
        </button>
        
    </div>