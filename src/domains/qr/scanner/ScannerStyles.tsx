import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
