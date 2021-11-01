import React, { Component } from 'react';
import { v4 as createId } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Alert from './components/Alert';
import Confirmation from './components/Confirmation';

class MyList extends Component {
  state = {
    toDos: this.props.theList,
    isAlert: false,
    confirmation: { show: false },
  };

  // Add a new task
  addTodo = (newTask) => {
    if (!newTask.trim()) {
      this.setState({ isAlert: true });
      return;
    }

    const toDos = this.state.toDos;
    const id = createId();
    this.setState({ toDos: [{ id, task: newTask }, ...toDos] });
  };

  // Delete a task
  removeTodo = () => {
    const id = this.state.confirmation.currentTask;
    const updatedToDos = this.state.toDos.filter((task) => task.id !== id);
    this.setState({ toDos: updatedToDos });
  };

  // Display list of tasks
  displayTodos = () => {
    return this.state.toDos.map((task) => (
      <ListItem
        todoItem={task}
        key={task.id}
        showConfirm={this.displayConfirm}
      />
    ));
  };

  // Display alert message
  displayAlert = (isAlert) => {
    this.setState({ isAlert });
  };

  // Display confirmation message
  displayConfirm = (id) => {
    this.setState({
      confirmation: { show: true, currentTask: id },
    });
  };

  // Check the result of confirmation
  checkConfirm = (isConfirm) => {
    this.setState({ isAlert: false, confirmation: { show: false } });
    // If Ok, delete the task
    if (isConfirm) this.removeTodo();
  };

  render() {
    return (
      <>
        {this.state.confirmation.show && (
          <Confirmation confirm={this.checkConfirm} />
        )}
        {this.state.isAlert && <Alert alert={this.displayAlert} />}
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
