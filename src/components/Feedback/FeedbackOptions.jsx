import PropTypes from 'prop-types';
import { FeedButtonWrap, FeedButtonGood } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, style }) => {
  return (
    <FeedButtonWrap>
      {options.map(key => (
        <FeedButtonGood
          type="button"
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </FeedButtonGood>
      ))}
    </FeedButtonWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
