import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

class App extends Component{

  state = {
    users: [
      { username: "guzmanem", age: 24, id: 0 },
      { username: "vickybel1995", age: 24, id: 1 }
    ]
  }

  changeUsername = (event) => {
    this.setState({
      users: this.state.users.map( obj => obj.id === parseInt(event.target.id) ? { username: event.target.value, age: 24, id: parseInt(event.target.id) } : obj )
    })
  }

  render(){

    const style = {
      width: '25%',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '4px',
      textAlign: 'center',
      margin: '20px auto',
      boxShadow: '0 2px 3px #ccc'
    };

    const style_macro = {
      display: 'flex' 
    }

    return(
      <div style={style_macro}>
        <div style={style}>
          <UserOutput
            username={this.state.users[0].username}
            age={this.state.users[0].age}/>
          <UserInput id={0} change = {this.changeUsername} username={this.state.users[0].username}/>
        </div>
        <div style={style}>
          <UserOutput
            username={this.state.users[1].username}
            age={this.state.users[1].age}/>
          <UserInput id={1} change = {this.changeUsername} username={this.state.users[1].username}/>
        </div>
      </div>
    );
  }

}

export default App;
