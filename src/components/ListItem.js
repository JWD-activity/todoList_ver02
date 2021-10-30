import React, { Component } from 'react';

export class ListItem extends Component {
  state = {
    isChecked: false,
  };

  changeHandler = (e) => {
    this.setState({ isChecked: e.target.checked });
  };

  deleteHandler = (id) => {
    this.props.removeTodo(id);
  };

  render() {
    return (
      <div className='item'>
        <input type='checkbox' onChange={this.changeHandler} />
        <li>{this.props.todoItem.task}</li>
        {this.state.isChecked && (
          <button
            className='delete-btn'
            onClick={() => this.deleteHandler(this.props.todoItem.id)}
          >
            X
          </button>
        )}
      </div>
    );
  }
}

export default ListItem;
