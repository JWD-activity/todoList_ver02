import React, { Component } from 'react';

export class Confirmation extends Component {
  okHandler = () => {
    this.props.confirm(true);
  };
  cancelHandler = () => {
    this.props.confirm(false);
  };

  render() {
    return (
      <div className='backdrop'>
        <div className='confirm'>
          <h2>🧐 Confirm</h2>
          <h3>Are you sure you want to delete the task?</h3>
          <button onClick={this.okHandler} className='ok-btn'>
            OK
          </button>
          <button onClick={this.cancelHandler} className='cancel-btn'>
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
