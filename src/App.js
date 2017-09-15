import React, { Component } from 'react';
import './App.css';
import router from './router';
import { connect } from 'react-redux';

class App extends Component {
 constructor() {
   super()
   this.state= {
    //auth view
    username: '',
    password: '',
    //dashview
    properties: [],
    //step1
    //step2
    //step3
    //step4
    //step5
   }
 }


  render() {
    return (
      <div className="App">
        <h1> HELLO </h1>
      </div>
    );
  }
}

export default App;
