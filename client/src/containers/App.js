import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: "no response"
    };
  }

  componentDidMount() {
    fetch('api')
      .then((res) => {
        if (res.ok) return res.json();
        console.error('There was an error fetching data: /api')
      })
      .then((res) => {
        this.setState({ res: res })
      })
  }

  render() {
    return (
      <div>
        <h1>React is running!</h1>
        <h2>{ this.state.res.title }</h2>
      </div>
    );
  }
}

export default App;
