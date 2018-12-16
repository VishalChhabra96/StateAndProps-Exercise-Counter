import React from 'react';
import Counter from "./counterbutton";
import {ChangeAll} from "./counterbutton";
import "./counter.css";
class App extends  React.Component{
    constructor(){
        super();

        this.state = {
            value:''
        }
    }
    incrementAll = () =>
    {
        this.setState({ value: 'increment'});
    }
    decrementAll = () =>
    {
        this.setState({ value: 'decrement'});
    }
    render(){
        return(
            <div>
                <h1>State and Props Exercise!</h1>
                <label>Counter 1</label>  <Counter value={this.state.value} />
                <label>Counter 2</label><Counter value={this.state.value} />
                <label>Counter 3</label><Counter value={this.state.value} />
                <ChangeAll incrementAll={this.incrementAll} decrementAll={this.decrementAll}/>
            </div>
        )
    }
}
export default App;