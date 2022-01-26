import React, { useState, useEffect } from 'react';

import FeedbackList from './components/Feedback';
import FeedbackOptions from './components/Feedback/FeedbackOptions.jsx';
import Section from './components/Feedback/SectionTitile';
import Notification from './components/Feedback/Notification';
import './App.css';
import {
  Container,
  StatisticsTitle,
} from './components/Feedback/Feedback.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const feedBacks = { good, neutral, bad };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, good, neutral]);

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? (good * 100) / total : 0;
  };

  const onLeaveFeedback = feedId => {
    switch (feedId) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error('There is no feedback');
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBacks)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
        <StatisticsTitle>Statistics</StatisticsTitle>
        {total !== 0 ? (
          <FeedbackList
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
}

export default App;
