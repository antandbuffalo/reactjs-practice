import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state = {
    persons: [
      {name: 'Jeya', age: 18},
      {name: 'Balaji', age: 28},
      {name: 'Jeyabalaji', age: 38}
    ]
  }

  onPersonClickHandler = function() {
    this.setState({
      persons: [
        {name: 'Jeya123', age: 18},
        {name: 'Balaji', age: 28},
        {name: 'Jeyabalaji', age: 38}
      ]
    });
  }

  onNameChanged = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 1},
        {name: 'Balaji', age: 280},
        {name: 'Jeyabalaji', age: 38}
      ]
    });
  };

  render() {
    
    return (
      <div className="App">
        Persons
        <button onClick={this.onPersonClickHandler.bind(this)}>I am a button</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          nameChanged={this.onNameChanged}
          />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
