import React, { Component } from 'react';
import { v4 as createId } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Footer from './components/Footer';
import Header from './components/Header';

class MyList extends Component {
  state = {
    toDos: this.props.theList,
  };

  addTodo = (newTask) => {
    // 1. Check invalid user input(if only white space).if invalid, display the message.
    if (!newTask.trim()) {
      window.confirm('Please, Enter something!');
      return;
    }

    // 2. if valid, create unique id (uuid),then update toDos with a new task and id
    const toDos = this.state.toDos;
    const id = createId();
    this.setState({ toDos: [{ id, task: newTask }, ...toDos] });
  };

  removeTodo = (id) => {
    // 1. Disply the deleting confirm message.
    const confirm = window.confirm('Are you sure you want to delete the task?');
    // 2. If a user confirms ok,
    if (confirm) {
      // 3. Check the id of the selected task through the filter() and get the updated toDos.
      const updatedToDos = this.state.toDos.filter((task) => task.id !== id);
      // 4. Set state with updated toDos
      this.setState({ toDos: updatedToDos });
    }
  };

  displayTodos = () => {
    return this.state.toDos.map((task) => (
      <ListItem todoItem={task} key={task.id} removeTodo={this.removeTodo} />
    ));
  };

  render() {
    return (
      <>
        <Header heading='Things I should stop procrastinating 😀' />
        <main>
          <AddItem addTodo={this.addTodo} />
          <div className='list'>
            <ul>{this.displayTodos()}</ul>
          </div>
        </main>
        <Footer author='Jinok' />
      </>
    );
  }
}

export default MyList;
