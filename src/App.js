import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

// import LifecyclesWrap from './testCyclelife/lifecycles-wrap-component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'




class App extends Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    console.log('Start---componentDidMount!')
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //   createUserProfileDocument(user);
    //   this.setState({
    //     currentUser: user
    //   })
    //   console.log(user)
    // })

    // ================== GOOGLE AUTH
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log("AAA",this.state)
        });
      }

      this.setState({ currentUser: userAuth })
    })

  }

  componentWillUnmount() {
    console.log('End---componentWillUnmount!!!')
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <LifecyclesWrap increment={1} /> */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
