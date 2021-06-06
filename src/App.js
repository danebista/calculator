import React, {Component} from 'react';
import './App.css';
import {ButtonList} from './components/buttonlist.components'
import {ResultBar} from './components/resultbar.component';

class App extends Component {
  constructor(){
    super();
    this.state = { result:""}
  }

  handleClick = (button)=> {
    
    if (button.target.value === "CE"){
      this.backspace();
    }
    
    else if (button.target.value === "C"){
      this.reset();
    }

    else if (button.target.value === "="){
      this.calculateResult();
    }
    else {
      this.setState({result: this.state.result + button.target.value})
    }
  }

  calculateResult = () => {

    try {
      const finalResult = (eval(this.state.result)) + '';
      this.setState({result: finalResult});
    }catch(e){
      this.setState({result: ' Error. Press C to clear screen'})
    }
  }

  backspace = () => {
    
    if (this.state.result.length > 0){
        const splicedString = this.state.result.substring(0, this.state.result.length - 1);
        this.setState({result: splicedString});
    }
  }


  reset = () => {
    
    if (this.state.result.length >0){
      this.setState({result: ""})
    }
  }

  render(){
    console.log(this.state.result)
    return (
      <div className="App">
        <ResultBar finalValue={this.state.result} />
        <ButtonList handleClick={this.handleClick}></ButtonList>
      </div>
    );
  }
}

export default App;
