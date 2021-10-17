import React, { Component } from 'react'

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 }

  onClickGood = () => {
    this.setState((prev) => {
      return { good: this.state.good + 1 }
    })
  }

  onClickNeutral = () => {
    this.setState((prev) => {
      return { neutral: this.state.neutral + 1 }
    })
  }

  onClickBad = () => {
    this.setState((prev) => {
      return { bad: this.state.bad + 1 }
    })
  }

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad

    return total
  }
  countPositiveFeedbackPercentage() {
    const positive = (this.state.good / this.countTotalFeedback()) * 100

    return positive
  }

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onClickGood}>
          Good
        </button>
        <button type="button" onClick={this.onClickNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.onClickBad}>
          Bad
        </button>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        {!!this.countTotalFeedback() && (
          <>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback:{' '}
              {this.countPositiveFeedbackPercentage().toFixed(0)}%
            </p>
          </>
        )}
      </>
    )
  }
}

export default App
