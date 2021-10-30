import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.heading}</h1>
      </header>
    );
  }
}

export default Header;
