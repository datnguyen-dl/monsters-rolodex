import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './App.css';

// import LifecyclesWrap from './testCyclelife/lifecycles-wrap-component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'



class App extends Component {

  // constructor() {
  //   super()

  //   this.state = {
  //     currentUser: null
  //   }
  // }

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

    const { setCurrentUser } = this.props
    // ================== GOOGLE AUTH
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
        // console.log("AAA",this.state)
      };

      setCurrentUser(userAuth)
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
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
          />
        </Switch>

      </div>
    );
  }
}

// mapStateToProps?: (state, ownProps?) => Object
// Hàm mapStateToProps là một bộ lọc (filter) sử dụng để lấy (select) những thứ trong cái thùng chứa mà component yêu cầu
// mapStateToProps - dùng để map State của Component với State trong Store của Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
// mapDispatchToProps - dùng để map method của Component với lời gọi action từ Store tới Actions của Redux
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
