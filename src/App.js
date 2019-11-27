import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      setOfNum: "",
      operation: "",
      result: ""
    }
  }

  // console.log(setOfNum)

  handleFormSubmit = (event) => {
    event.preventDefault()


  }

  handleNumbertext = (event) => {



    this.setState({
      setOfNum: event.target.value
    })


  }

  handleSelect = (event) => {

    this.setState({
      operation: event.target.value,
    })
  }

  results = (event) => {
    let input = this.state.setOfNum
    let splitInput = input.split(",");
    let sum = 0
    let obj = {}
    let average = 0
   
      for (let i = 0; i < splitInput.length; i++) {
        sum += Number(splitInput[i])
      }
      if (this.state.operation === "sum") {
        this.setState({
          result: sum
        })
      }
 else if (this.state.operation === "mode") {
      for (let i = 0; i < splitInput.length; i++) {
        if (!obj[splitInput[i]]) {
          obj[splitInput[i]] = 1
        } else {
          obj[splitInput[i]]++
        }
      }
      let mode = Object.keys(obj).reduce((a, b) => 
      obj[a] > obj[b] ? a : b)
      this.setState({
        result: mode
      })


    }else if(this.state.operation === "average"){
      average = sum/splitInput.length
      this.setState({
        result: average
      })
    }

  }



  render() {
    console.log(this.state)
    const { setOfNum, operation, result } = this.state
    return (
      <div className="App" >
        <p>Enter each number in the array, seperated by a "," </p>

        <form onSubmit={this.handleFormSubmit}>
          <input type="text"
            placeholder="Numbers only"
            value={setOfNum}
            onChange={this.handleNumbertext}
          >
          </input>

          <select
            value={operation}
            onChange={this.handleSelect}
          >
            <option value=""></option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button onClick={this.results}>Calculate</button>
          <p >{result} </p>
        </form>
      </div>

    );

  }
}

export default App;
