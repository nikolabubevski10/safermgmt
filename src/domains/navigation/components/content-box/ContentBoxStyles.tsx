import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  padding-bottom: 0px;
  padding-right: 30px;
  padding-top: 30px;
  position: relative;
`;

export const TopPanel = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  flex-grow: 1;
  padding: 30px;
  overflow: scroll;
  width: 100%;
  padding: 50px;
`;

export const MiddlePanel = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadiusXXL};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadiusXXL};
  height: 15px;
  opacity: 0.7957;
  width: 87%;
`;

export const BottomPanel = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadiusXXL};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadiusXXL};
  height: 15px;
  opacity: 0.5957;
  width: 76%;
`;
