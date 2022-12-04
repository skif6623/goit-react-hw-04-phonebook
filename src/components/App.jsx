import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Pleade leave feedback</h1>
        <button name="good" type="button" onClick={this.onButtonClick}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.onButtonClick}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.onButtonClick}>
          Bad
        </button>
        <p>Statistics</p>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>{' '}
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}
