import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  height: 100%;
  flex: 1;
`;

export const Inner = styled.div<{
  maxHeight?: number;
}>`
  max-height: ${({ maxHeight }) => maxHeight}px;
  min-height: 250px;
  overflow: scroll;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px 10px 0px;
`;

export const SortText = styled.div`
  color: ${({ theme }) => theme.secondaryBlack};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  margin-right: 10px;
  user-select: none;
`;
