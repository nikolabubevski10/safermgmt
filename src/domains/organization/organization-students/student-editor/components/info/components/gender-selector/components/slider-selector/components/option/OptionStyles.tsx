import styled from 'styled-components';

export const Label = styled.label`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.secondaryBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightMedium};
  line-height: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const Radio = styled.input.attrs(() => ({
  type: 'radio',
}))`
  height: 0;
  width: 0;
`;
