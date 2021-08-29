import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props) // gan props o tren va o day thi` moi' dung props trong Contructor duoc.
  //   this.state = {
  //     monsters: [],
  //     searchField: '',
  //     meaningOfLife: 47 + this.props.increment
  //   }
  //   // de bo code duoi ta dung Arrows Function: handleChange(e){} ----------> handleChange = (e) => {}
  //   // this.handleChange = this.handleChange.bind(this)
  // }
  // ===> rut ngan nhu o duoi
  // state = constructor(props) {super(props)}
  state = {
    monsters: [],
    searchField: '',
    meaningOfLife: 47
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    })
  }

  handleClick = () => {
    // prevState = this.state
    // prevProps = this.props
    this.setState((prevState, prevProps) => {
      return { meaningOfLife: prevState.meaningOfLife + prevProps.increment }
    },
      () => console.log(this.state.meaningOfLife)
    )
  }

  render() {
    const { monsters, searchField } = this.state
    // array.filter(function(currentValue, index, arr), thisValue)
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h2>Asynchronous setState</h2>
        <strong>{this.state.meaningOfLife}</strong><br />
        <button onClick={this.handleClick}>State</button>
        <h1>Monsters Rolodex List</h1><br />
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
