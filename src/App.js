import React, { Component } from 'react';

import FeedbackList from './components/Feedback';
import FeedbackOptions from './components/Feedback/FeedbackOptions.jsx';
import Section from './components/Feedback/SectionTitile';
import Notification from './components/Feedback/Notification';
import './App.css';
import {
  Container,
  StatisticsTitle,
} from './components/Feedback/Feedback.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? (this.state.good * 100) / this.countTotalFeedback()
      : 0;
  };

  onLeaveFeedback = feedId => {
    this.setState(prevState => {
      return {
        [feedId]: prevState[feedId] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          <StatisticsTitle>Statistics</StatisticsTitle>
          {this.countTotalFeedback() !== 0 ? (
            <FeedbackList
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={Math.round(
                this.countPositiveFeedbackPercentage(),
              )}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
