import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const LinkText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryYellowMedium};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
