import PropTypes from 'prop-types';
import { FaGrinStars, FaGrin, FaMeh } from 'react-icons/fa';
import {
  StatisticsList,
  StatisticsNumber,
  StatisticsItem,
} from './Feedback.styled';

const FeedbackList = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>
      Good:
      <StatisticsNumber>
        {good} <FaGrinStars />{' '}
      </StatisticsNumber>
    </StatisticsItem>
    <StatisticsItem>
      Neutral:
      <StatisticsNumber>
        {neutral} <FaGrin />{' '}
      </StatisticsNumber>
    </StatisticsItem>
    <StatisticsItem>
      Bad:
      <StatisticsNumber>
        {bad} <FaMeh />{' '}
      </StatisticsNumber>
    </StatisticsItem>
    <StatisticsItem>
      Total: <StatisticsNumber>{total}</StatisticsNumber>
    </StatisticsItem>
    <StatisticsItem>
      PositivePercentage:
      <StatisticsNumber>{positivePercentage}%</StatisticsNumber>
    </StatisticsItem>
  </StatisticsList>
);

FeedbackList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackList;
