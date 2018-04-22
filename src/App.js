import React, { Component } from "react";
import Output from "./small/output";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
      input_update: "",
      edit_form: false,
      update_target: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.editFormTogle = this.editFormTogle.bind(this);
    this.deletetodos = this.deletetodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleChange(event) {
    var param = event.target.name;
    var value = event.target.value;

    this.setState({ [param]: value });
    // console.log(this.state.review);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      todos: prevState.todos.concat(prevState.input),
      input: ""
    }));
  }

  editFormTogle(target_index) {
    this.setState((prevState, props) => ({
      edit_form: !prevState.edit_form,
      update_target: target_index
    }));
  }

  deletetodos(target_index) {
    console.log(target_index);
    this.setState((prevState, props) => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }));
  }

  updateTodo() {
    this.setState((prevState, props) => ({
      todos: [
        ...prevState.todos
          .slice(0, this.state.update_target)
          .concat(this.state.input_update),
        ...prevState.todos.slice(this.state.update_target + 1)
      ],
      edit_form: false
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title" onClick={this.deletetodos}>
            Impact todo
          </h1>
          <input
            type="text"
            onChange={this.handleChange}
            id="input"
            name="input"
            value={this.state.input}
          />
          <button onClick={this.handleClick}>Add</button>
          {/*<div className="output" />*/}
          <Output
            todos={this.state.todos}
            editFormTogle={this.editFormTogle}
            deletetodos={this.deletetodos}
          />
          {this.state.edit_form ? (
            <div>
              <input
                className="edit-form"
                type="text"
                id="input"
                onChange={this.handleChange}
                name="input_update"
                placeholder="edit here ..."
                value={this.state.input_update}
              />
              <button onClick={this.updateTodo}>Update</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
