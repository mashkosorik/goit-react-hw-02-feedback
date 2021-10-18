import React from 'react'
const FeedbackOptions = (props) => {
  const { good, neutral, bad } = props
  return (
    <>
      <button type="button" onClick={good}>
        Good
      </button>
      <button type="button" onClick={neutral}>
        Neutral
      </button>
      <button type="button" onClick={bad}>
        Bad
      </button>
    </>
  )
}

export default FeedbackOptions
