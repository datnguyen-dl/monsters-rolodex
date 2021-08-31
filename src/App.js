import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

// import LifecyclesWrap from './testCyclelife/lifecycles-wrap-component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'





class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LifecyclesWrap increment={1} /> */}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
