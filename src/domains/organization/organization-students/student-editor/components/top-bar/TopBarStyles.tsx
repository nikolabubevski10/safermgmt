import styled from 'styled-components';

export const BackButtonContainer = styled.div`
  margin-top: 12px;
`;

export const Container = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  height: auto;
  width: auto;
`;

export const TopInner = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-grow: 1;
  padding-right: 20px;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-weight: 900;
  font-size: 35px;
  line-height: 43px;
  flex-grow: 1;
  min-width: 0px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryBlueDark};
  font-family: ${({ theme }) => theme.fontBold};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  padding: 3px 3px 3px 0px;
`;
