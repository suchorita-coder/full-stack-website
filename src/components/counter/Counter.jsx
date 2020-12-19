import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'


class Counter extends Component{
    constructor(){
        super() //Error 1
        this.state   = {
            counter : 0
            //secondCounter :100
        }
        this.increment = this.increment.bind(this); 
    }
    render(){
        return (
         <div className="counter">
                  <CounterButton by = {1} incrementMethod = {this.increment()} />
                  <CounterButton by = {5} incrementMethod = {this.increment()}/>
                  <CounterButton by = {10} incrementMethod = {this.increment()}/>
          </div>
              );
        }

        increment(){ 
            console.log( "increment from parent  ") 
            //this.setState({
            //   counter : this.state.counter + this.props.by
    
            //});
        }

} 

 class CounterButton extends Component{
    // define the initial state in a constructor
    //state =>couter 0
    constructor(){
        super() //Error 1
        this.state   = {
            counter : 0
            //secondCounter :100
        }
        this.increment = this.increment.bind(this); 
    }
    render(){
    //render = () =>  {
     //const style = {fontSize : "50px",padding: "15px 30px"};

    return(
                <div className = "counter">
                         <button onClick={this.increment} > {this.props.by} </button>
                         <span className = "count" > {this.state.counter} </span>
                </div>

            )
    }

     increment(){ // Update state - counter++
        //console.log('increment')
        //this.state.counter++; // bad practice
        this.setState({
            counter : this.state.counter + this.props.by
           // secondCounter : this.state.secondCounter + 1

        });
        this.props.incrementMethod();
    }
 }  

 CounterButton.defaultProps={
        by : 1

}

CounterButton.propTypes ={
        by : PropTypes.number

}


export default Counter