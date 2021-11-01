import React, { Component } from 'react';

export class AddItem extends Component {
  state = {
    userInput: '',
  };

  changeHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.userInput);
    this.setState({ userInput: '' });
  };

  render() {
    return (
      <div className='create'>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Enter your task here.'
            aria-label='add item'
            onChange={this.changeHandler}
            value={this.state.userInput}
            required
          />
          <button className='add-btn' type='submit'>
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
