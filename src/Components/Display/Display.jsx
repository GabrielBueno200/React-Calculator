import React from 'react';
import './Display.css'
import {getChildren} from './../../utils/utils'

export default props => 
<div className="display">
    <p className="result">{props.value}</p>

    {getChildren(props)}

</div>