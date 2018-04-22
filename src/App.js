import React, { Component } from "react";
import Output from "./small/output";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
      // ,
      // edit_form: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.editFormTogle = this.editFormTogle.bind(this);
    this.deletetodos = this.deletetodos.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      todos: prevState.todos.concat(`todo ${prevState.todos.length}`)
    }));
  }

  editFormTogle() {
    this.setState((prevState, props) => ({
      edit_form: !prevState.edit_form
    }));
  }

  deletetodos(index) {
    console.log(index);
    this.setState((prevState, props) => ({
      edit_form: prevState.todos.splice(index, 1)
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title" onClick={this.deletetodos}>
            Impact todo
          </h1>
          <input type="text" id="input" />
          <button onClick={this.handleClick}>Add</button>
          {/*<div className="output" />*/}
          <Output
            todos={this.state.todos}
            editFormTogle={this.editFormTogle}
            deletetodos={this.deletetodos}
          />
          {/*
            this.state.edit_form ? (  <input className="edit-form" type="text" id="input" placeholder="edit here ..."/>) : ("")
          */}
        </div>
      </div>
    );
  }
}

export default App;
