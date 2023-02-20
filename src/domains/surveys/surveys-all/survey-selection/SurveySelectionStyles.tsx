import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  h1 {
    font-size: 35px;
    line-height: 43px;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  min-height: 52px;
`;

export const SurveyColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 300}px) {
    :first-child {
      margin-right: 10px;
    }
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 300}px) {
    flex-direction: row;
  }
`;
