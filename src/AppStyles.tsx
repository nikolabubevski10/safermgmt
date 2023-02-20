import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh; // used to keep footer at the bottom
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryWhite};
`;
