import React from 'react';
import "./counter.css";
class Counter extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            counterVal: 0
        };
        console.log("Counter props : "+this.state.counterVal);
    }
    componentWillReceiveProps(updatedProps) {
        console.log('=======>>>>>>', updatedProps);

        const { counterVal } = this.state;
        if(updatedProps.value === 'increment') {
            this.setState({ counterVal: counterVal + 1 });
        } else if (updatedProps.value === 'decrement') {
            this.setState({ counterVal: counterVal - 1 });
        }
    }
    inc = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val+1});
    };
    dec = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val-1});
    };
    render(){
        return(
            <div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <span> {this.state.counterVal} </span>
                <br/><br/>
            </div>
        )
    }
}
export const ChangeAll = (props) =>{
    return (
        <div>
            <label>Increment All</label>
            <button onClick={props.incrementAll}>+</button>
            <label>Decrement All</label>
            <button onClick={props.decrementAll}>-</button>
        </div>
    )
}
export default Counter;