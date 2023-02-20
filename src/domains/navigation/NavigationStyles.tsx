import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 29px 0px 29px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

export const InnerSidebar = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  padding-bottom: 29px;
  padding-top: 29px;
`;
