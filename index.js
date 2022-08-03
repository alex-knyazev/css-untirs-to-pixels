import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {
        cmSize: 0,
        mmSize: 0,
        inchSize: 0,
      },
    };
  }

  componentDidMount() {
    const cmSize = document.getElementById('testCm').offsetWidth;
    const mmSize = document.getElementById('testMm').offsetWidth;
    const inchSize = document.getElementById('testIn').offsetWidth;
    debugger;
    this.setState({
      sizes: {
        cmSize,
        mmSize,
        inchSize,
      },
    });
  }

  render() {
    const { cmSize, mmSize, inchSize } = this.state.sizes;

    return (
      <div id="app">
        Css measurement units to pixels:
        <p>One cm is {cmSize} pixels</p>
        <p>One mm is {mmSize} pixels</p>
        <p>One inch is {inchSize} pixels</p>
        <div id="testCm" style={{ width: '1cm' }} />
        <div id="testMm" style={{ width: '1mm' }} />
        <div id="testIn" style={{ width: '1in' }} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
