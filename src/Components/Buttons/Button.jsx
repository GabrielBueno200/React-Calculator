import React from 'react';
import './Button.css';

const getSize = props => props.double ? "double" 
                        : props.triple ? "triple"
                        : props.operation ? "operation" : ''

export default props => 
    <button
        onClick = {e => props.click(props.label)}
        className = {"button " + getSize(props) }
    >
        {props.label}
    </button>