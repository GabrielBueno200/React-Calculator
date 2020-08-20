import React, {Component} from 'react';
import './Calculator.css';
import Button from './../Components/Buttons/Button';
import Display from './../Components/Display/Display';
import Expression from './../Components/Expression/Expression';

const initialState = {
    displayValue: '0',
    valueA: 0,
    newValue: false,
    operation: null,
    expression: '',
    
}

export default class Calculator extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.cleanDisplay = this.cleanDisplay.bind(this);
        this.insertOperation = this.insertOperation.bind(this);
        this.insertDigit =this.insertDigit.bind(this);
    }

    
    cleanDisplay(n){
        this.setState({...initialState})

    }

    insertOperation(n){
        if (n !== "="){
            if (this.state.operation) 
                return 
            else
                this.setState({operation: n, valueA: this.state.displayValue, expression: this.state.expression + n});

        } else{
            if (!this.state.operation)
                return
            else{
 
                if(this.state.displayValue == ''){
                    return
                } else{
                    const valueA = this.state.valueA
                    const valueB = this.state.displayValue
                    const operation = this.state.operation
                    const expression = `${valueA} ${operation} ${valueB}`;
                    this.setState({...initialState, displayValue: eval(`${valueA}${operation}${valueB}`)})
                }
            }
        }
            

        
        
    }

    insertDigit(n){
        if (n === '.' && this.state.displayValue.includes(".")){
            return
        } else{
            

            if (this.state.operation && !this.state.newValue) { 
                this.setState({displayValue: n, newValue: true, expression: this.state.expression + n});
            } else{

                const newValue = (n != '.') ? '' + parseFloat(this.state.displayValue + n) 
                                            : '' + this.state.displayValue + n;

                this.setState({displayValue: newValue, expression: this.state.expression + n});
            }

        }
    }

    render(){
        return(
            <div className="main">
                <Display value={this.state.displayValue}>
                    <Expression value={this.state.expression}></Expression>
                </Display>
                <Button label="CE" click={this.cleanDisplay} triple />
                <Button label="*" click={this.insertOperation} operation/>
                <Button label="7" click={this.insertDigit} />
                <Button label="8" click={this.insertDigit} />
                <Button label="9" click={this.insertDigit} />
                <Button label="/" click={this.insertOperation} operation/>
                <Button label="4" click={this.insertDigit} />
                <Button label="5" click={this.insertDigit} />
                <Button label="6" click={this.insertDigit} />
                <Button label="-" click={this.insertOperation} operation/>
                <Button label="1" click={this.insertDigit} />
                <Button label="2" click={this.insertDigit} />
                <Button label="3" click={this.insertDigit} />
                <Button label="+" click={this.insertOperation} operation/>
                <Button label="0" click={this.insertDigit} double/>
                <Button label="." click={this.insertDigit} />
                <Button label="=" click={this.insertOperation} operation/>
            </div>
        )
    }
}