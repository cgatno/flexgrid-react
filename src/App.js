import React, { Component } from "react";

import { FlexGrid } from "wijmo/wijmo.react.grid";

import "./App.css";

class App extends Component {
  state = {
    users: [
      {
        id: 0,
        name: "Christian",
        job: "React Dev"
      },
      {
        id: 1,
        name: "Connor",
        job: "Front-End Web Dev"
      },
      {
        id: 2,
        name: "Sarah",
        job: "Chemist"
      }
    ],
    nameInput: "",
    jobInput: "",
    cellEdit: false,
    editingCell: ""
  };

  addUser() {
    if (this.state.nameInput.length === 0 || this.state.jobInput.length === 0) {
      return;
    }
    this.setState({
      users: [
        // Create a new array, but keep the previous users
        ...this.state.users,
        // Add the new user to the array
        {
          id: this.state.users.length,
          // Use the input values saved in state
          name: this.state.nameInput,
          job: this.state.jobInput
        }
      ],
      // Reset the inputs to blank in the process
      nameInput: "",
      jobInput: ""
    });
  }

  updateInputValue(name, evt) {
    this.setState({
      [name]: evt.target.value
    });
  }

  beginEdit(args) {
    this.setState({
      cellEdit: true,
      editingCell: `${args.col}, ${args.row}`
    });
  }

  finishEdit() {
    this.setState({
      cellEdit: false
    });
  }

  render() {
    return (
      <div className="App">
        <FlexGrid
          itemsSource={this.state.users}
          className="grid"
          allowAddNew={true}
          beginningEdit={(sender, args) => {
            this.beginEdit(args);
          }}
          cellEditEnded={() => {
            this.finishEdit();
          }}
        />
        <br />
        <h2>Add User</h2>
        <div>
          <label htmlFor="userName">Name: </label>
          <input
            type="text"
            id="userName"
            value={this.state.nameInput}
            onChange={evt => this.updateInputValue("nameInput", evt)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="userJob">Job: </label>
          <input
            type="text"
            id="userJob"
            value={this.state.jobInput}
            onChange={evt => this.updateInputValue("jobInput", evt)}
          />
        </div>
        <br />
        <input type="button" value="Add User" onClick={() => this.addUser()} />
        <br />
        <h2 style={{ display: this.state.cellEdit ? "block" : "none" }}>
          Currently editing cell at {this.state.editingCell}
        </h2>
        <br />
        <a href="https://www.grapecity.com/en/blogs/wijmo-flexgrid-best-react-data-grid">
          Check out the full tutorial blog post for more information.
        </a>
      </div>
    );
  }
}

export default App;
