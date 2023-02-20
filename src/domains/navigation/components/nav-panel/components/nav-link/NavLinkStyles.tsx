import styled from 'styled-components';

export const Container = styled.div<{
  shouldShow: boolean;
}>`
  display: flex;
  max-height: ${({ shouldShow }) => (shouldShow ? 'auto' : '0px')};
  flex-direction: column;
  overflow: hidden;
`;

export const MainLinkContainer = styled.div<{
  isActive?: boolean;
}>`
  align-items: center;
  color: ${({ theme }) => theme.secondaryGrayDark};
  cursor: pointer;
  display: flex;
  fill: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: 500;
  margin-top: 30px;
  position: relative;
  width: 173px;
  :hover {
    fill: ${({ theme }) => theme.secondaryBlack};
    color: ${({ theme }) => theme.secondaryBlack};
  }
  ${({ isActive, theme }) =>
    isActive &&
    `
        fill: ${theme.secondaryBlack};
        color: ${theme.secondaryBlack}; 
        font-weight: 600;
    `}
`;

export const Button = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  height: 100%;
  outline: none;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const Label = styled.div`
  color: inherit;
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: inherit;
  line-height: 19px;
  margin-left: 15px;
  width: 130px;
  z-index: 5;
`;

export const SubLinkContainer = styled.div<{
  isOpen: boolean;
  height: number;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  height: ${({ isOpen, height }) => (isOpen ? `${height}px` : '0px')};
`;
