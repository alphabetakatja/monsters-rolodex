import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // we need this just in case we don't have an arrow function (lexical scoping) 
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(`Component did mount!`);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json(); 
      }).then(users => {
        console.log('Users: ', users);
        this.setState({ monsters: users })
      })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    //destructuring is the same as const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
