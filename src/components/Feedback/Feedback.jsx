// import PropTypes from 'prop-types';
import './Feedback.css';
import React, { Component } from 'react';

class FeedbackTemplate extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positiveFeedback: 0,
  };

  buttonOnClick = e => {
    e.preventDefault();
    for (const key in this.state) {
      if (key === e.currentTarget.dataset.variant) {
        this.setState({
          key: (this.state[key] += 1),
        });
      }
    }
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.setState({
      positiveFeedback: Math.ceil(
        (this.state.good / this.countTotalFeedback()) * 100
      ),
    });
  };

  render() {
    return (
      <div class="feedback">
        <h2 class="title">Please leave feedback</h2>
        <ul className="buttons-list">
          <li class="button-element">
            <button
              onClick={this.buttonOnClick}
              type="submit"
              class="button"
              data-variant="good"
            >
              Good
            </button>
          </li>
          <li class="button-element">
            <button
              onClick={this.buttonOnClick}
              type="submit"
              class="button"
              data-variant="neutral"
            >
              Neutral
            </button>
          </li>
          <li class="button-element">
            <button
              onClick={this.buttonOnClick}
              type="submit"
              class="button"
              data-variant="bad"
            >
              Bad
            </button>
          </li>
        </ul>

        <div class="feedback-outcome">
          <h2 class="title">Statistics</h2>
          <ul class="outcome-list">
            <li class="outcome-element">
              <p>
                Good: <span>{this.state.good}</span>
              </p>
            </li>
            <li class="outcome-element">
              <p>
                Neutral: <span>{this.state.neutral}</span>
              </p>
            </li>
            <li class="outcome-element">
              <p>
                Bad: <span>{this.state.bad}</span>
              </p>
            </li>
            <li class="outcome-element">
              <p>
                Total: <span>{this.countTotalFeedback()}</span>
              </p>
            </li>
            <li class="outcome-element">
              <p>
                Positive feedback: <span>{this.state.positiveFeedback}%</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackTemplate;
