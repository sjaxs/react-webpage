//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Content.css';

// Cuando se cambia el state siempre se vuelve ha ejecutar el render

class Content extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     count: 0,
  //     number1: 0,
  //     number2: 0,
  //     result: 0
  //   };
  //   this.handleCountClick= this.handleCountClick.bind(this)
  //   this.handleResultClick= this.handleResultClick.bind(this)
  //   this.handleInputChanged= this.handleInputChanged.bind(this)
  // }
  // componentDidMount(){ //Se ejecuta cuando el componente ya ha cargado (vuelve a render con el nuevo estado)
  //   this.setState({count: 1})
  // }
  // handleCountClick(e){
  //   if (e.target.id==='add'){
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  //   }else if (e.target.id==='subtract'){
  //     this.setState({
  //       count: this.state.count - 1
  //     })
  //   }else if (e.target.id==='reset'){
  //     this.setState({
  //       count: 0
  //     })
  //   }
  // }

  // handleResultClick(e){
  //   this.setState({
  //     result: this.state.number1 + this.state.number2
  //   })
  // }
  // handleInputChanged(e){
  //   if(e.target.id === 'number1') {
  //     this.setState({
  //       number1: Number(e.target.value)
  //     })
  //   }else {
  //     this.setState({
  //       number2: Number(e.target.value)
  //     })
  //   }
  // }
  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {/* <h1>Soy el contenido</h1>
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Calculator</h2>

        <p>
          <input type="number"  id="number1" value={this.state.number1} onChange={this.handleInputChanged}/>
          +
          <input type="number"  id="number2" value={this.state.number2} onChange={this.handleInputChanged}/>

          <button id="result" onClick={this.handleResultClick}>=</button>
          {this.state.result}
        </p> */}
          {body}
      </div>
    );
  }
}

export default Content;
