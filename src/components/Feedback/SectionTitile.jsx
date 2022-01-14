import PropTypes from 'prop-types';
import { FeedSection, SectionTitle } from './Feedback.styled';

const Section = ({ title, children }) => (
  <FeedSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </FeedSection>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
