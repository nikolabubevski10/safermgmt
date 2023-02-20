import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;
