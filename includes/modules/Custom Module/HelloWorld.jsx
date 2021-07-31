// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'cumo_hello_world';

  render() {
    const Content = this.props.content;

    return (
      <h2>
        <Content/>
      </h2>
    );
  }
}

export default HelloWorld;
