import React, { Component } from 'react'
import s from './s.module.css'
import FeedbackOptions from './FeedbackOptions'
import Notification from './Notification'
import Section from './Section'
import Statistics from './Statistics'

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
      <section className={s.section}>
        <>
          <Section title="Please leave feedback"></Section>
          <FeedbackOptions
            good={this.onClickGood}
            neutral={this.onClickNeutral}
            bad={this.onClickBad}
          />
          <>
            {!!this.countTotalFeedback() && (
              <>
                <Notification message="No feedback given"></Notification>
                <Section title="Statistics"></Section>
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
                    1,
                  )}
                />
              </>
            )}
            {!this.countTotalFeedback() && (
              <Notification
                title="No feedback given"
                message="No feedback given"
              ></Notification>
            )}
          </>
        </>
      </section>
    )
  }
}

export default App
