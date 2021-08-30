import React, { Component } from 'react';
import LifecyclesWrap from './testCyclelife/lifecycles-wrap-component';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecyclesWrap increment={1}/>
        <div>=======================================</div>
        <Homepage />
      </div>
    );
  }
}

export default App;
