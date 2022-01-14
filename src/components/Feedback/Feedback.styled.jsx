import styled from 'styled-components';
import { theme } from 'Theme.styled';

export const Container = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-right: auto;
  margin-left: auto;
`;

export const FeedSection = styled.section`
  height: 400px;
`;

export const SectionTitle = styled.h1`
  background-color: green;
  width: 100vw;
  margin-bottom: 20px;
  padding: 10px 0;
  color: ${theme.colors.white};
  text-transform: uppercase;
`;

export const FeedButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 18px;
  justify-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const FeedButtonGood = styled.button`
  color: ${theme.colors.white};
  text-transform: capitalize;
  font-weight: 600;
  width: 90px;
  height: 60px;
  border-radius: 20px;
  border-color: ${theme.colors.borderColorGood};
  transition: background 1s ease;
  font-size: 20px;
  transition: transform 500ms ease;

  background: ${({ children }) => {
    switch (children) {
      case 'good':
        return 'linear-gradient(0deg, #07cd00 0%,#f0ff04 100%)';
      case 'neutral':
        return 'linear-gradient(0deg, #0025f9 0%,#75d3f7f2 100%)';
      case 'bad':
        return 'linear-gradient(0deg, #fd0000 0%,#ffd209 100%)';

      default:
        return 'linear-gradient(0deg, #07cd00 0%,#f0ff04 100%)';
    }
  }};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const StatisticsTitle = styled.h2`
  border: 2px solid ${theme.colors.borderColorGood};

  margin-left: auto;
  margin-right: auto;
  width: 306px;
  margin-bottom: 20px;
  padding: 5px 0px;
`;

export const StatisticsList = styled.ul`
  font-size: 20px;
  text-align: left;
  width: 306px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsNumber = styled.span`
  font-size: 36px;
  color: #757575;
`;
