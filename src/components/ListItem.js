import React, { Component } from 'react';

export class ListItem extends Component {
  state = {
    isChecked: false,
  };

  changeHandler = (e) => {
    this.setState({ isChecked: e.target.checked });
  };

  confirmHandler = (id) => {
    this.props.showConfirm(id);
  };

  render() {
    return (
      <div className='item'>
        <input type='checkbox' onChange={this.changeHandler} />
        <li>{this.props.todoItem.task}</li>
        {this.state.isChecked && (
          <button
            className='delete-btn'
            onClick={() => this.confirmHandler(this.props.todoItem.id)}
          >
            X
          </button>
        )}
      </div>
    );
  }
}

export default ListItem;
