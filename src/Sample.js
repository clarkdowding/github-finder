import React, { Component } from 'react';
import './App.css';

class Sample extends Component {
  render() {
    const name = 'John T. Doe';
    const showName = true;
    return (
      <div className='App'>
        <h1>Hello {showName && name} from Sample.</h1>
      </div>
    );
  }
}

export default Sample;
