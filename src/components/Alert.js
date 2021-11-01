import React, { Component } from 'react';

export class Alert extends Component {
  okHandler = () => {
    this.props.alert(false);
  };
  render() {
    return (
      <div className='backdrop'>
        <div className='alert'>
          <h2>😝Warning!</h2>
          <h3>Please Enter Something.</h3>
          <button className='ok-btn' onClick={this.okHandler}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Alert;
