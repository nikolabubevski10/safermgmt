import styled from 'styled-components';

export const Container = styled.div``;

export const Heading = styled.h2`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
`;

export const Text = styled.p`
  margin: 15px 0;
  font-size: ${({ theme }) => theme.fontSizeMedium};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
