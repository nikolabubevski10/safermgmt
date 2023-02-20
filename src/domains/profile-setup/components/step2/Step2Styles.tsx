import styled from 'styled-components';
import { MainActionButton } from '../../shared/SharedStyles';

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 35px;
    margin-top: 20px;
    text-align: center;
  }

  ${MainActionButton} {
    margin-top: 40px;
  }
`;

export const MessageText = styled.div`
  margin-top: 14px;
  max-width: 287px;
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;
