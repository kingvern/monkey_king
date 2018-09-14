import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { web3 } from "wallet";
const abi = require("./abi/MonkeyCore").abi;
const main = web3.loadContract(
  abi,
  "0x67da03db2943387c613439fba2375e18f8cf1e13"
);
console.log(main);
console.log("levellength: ");
console.log(main.GetLevelLength());








class App extends Component {
  getLevelCount = async () => {
    let levelCount = await main.GetLevelLength();
    console.log("levellength: ");
    console.log(levelCount); 
}
  handleClick() {
    this.getLevelCount();
    }
/** 
  getLevelCount: async function() {
        let levelCount = await main.GetLevelLength();
        console.log("levelCount:"+levelCount);
      }
      
  handleClick() {
      this.getLevelCount();
  }
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClicke={this.handleClick}>点击我执行getLevelCount</button>
      </div>
    );
  }
}

export default App;
