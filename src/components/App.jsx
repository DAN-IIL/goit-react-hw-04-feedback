import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ["good", "neutral", "bad"];

  const handleChangeState = e => {
    const { name } = e.currentTarget;
    switch(name) {
      case "good":
        setGood(prevSet => prevSet + 1)
      break;
      case "neutral":
        setNeutral(prevSet => prevSet + 1)
      break;
      case "bad":
        setBad(prevSet => prevSet + 1)
      break;

      default:
        console.log(`This is opion ${name} in not support`)
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const totalOpinions = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleChangeState}
        />
      </Section>
      {totalOpinions <= 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
}