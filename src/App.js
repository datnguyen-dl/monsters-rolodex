import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';

import LifecyclesWrap from './testCyclelife/lifecycles-wrap-component';
import Homepage from './pages/homepage/homepage.component';


// const Homepage = props => {
//   return (
//     <div>
//       <Link to='/blog/topics'>Link: Blog Topics</Link><br/><br/>
//       <button onClick={()=>{props.history.push('/contact/topics')}}>Button: Contact Topics</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   )
// }

const TopicsList = props => {
  // console.log(props)
  return (
    <div>
      <div>=======================================</div>
      <Link to='/'>homepage</Link>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/10`}>TO TOPIC 10, </Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17, </Link>
      <Link to={`${props.match.url}/12`}>TO TOPIC 12 </Link>
      <button
        onClick={() => { props.history.push(`${props.match.url}/24`) }}
      >
        TO TOPIC 24
      </button>
    </div>
  )
}

const TopicDetail = (props) => {
  // console.log(props)
  return (
    <div>
      <div>=======================================</div>
      <h1>TOPIC DETAIL PAGE: {props.history.location.pathname} {props.match.params.topicId}</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecyclesWrap increment={1} />

        <Route exact path='/' component={Homepage} />

        <Route exact path='/contact/topics' component={TopicsList} />
        <Route path='/contact/topics/:topicId' component={TopicDetail} />

        <Route exact path='/blog/topics' component={TopicsList} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} />
      </div>
    );
  }
}

export default App;
