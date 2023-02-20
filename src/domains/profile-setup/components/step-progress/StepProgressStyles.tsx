import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

// used for Storybook
export const TestContainer = styled.div`
  width: 1000px;
  max-width: 1000px;
  display: flex;
  border: 1px solid blue;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryWhite};
`;
