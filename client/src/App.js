import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // Make a call to rails to grab items
    // TODO set state of todo to the ones we have from db
  }

  addItem = (incomingTodo) => {
    // Todo add the new todo in the DB
    // TODO update client state
  }

  updateTodo = (id) => {
    // TODO update with the id in the db
    // TODO update the todo with the id in the state
  }

  deleteTodo = (id) => {
    // TODO make api call to delete item with id in db
    // todo delete item with id in the state
  }


  render() {
    return ( 
      <Container>

      </Container>
    )
  }
}

export default App;
