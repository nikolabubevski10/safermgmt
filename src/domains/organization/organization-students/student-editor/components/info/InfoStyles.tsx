import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const GroupInner1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
  max-width: auto;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    max-width: 625px;
  }
`;

export const GroupInner2 = styled.div`
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const FillerDiv = styled.div`
  flex: 1;
  margin-left: 32px;
`;
