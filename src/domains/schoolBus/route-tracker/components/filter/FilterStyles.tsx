import styled from 'styled-components';

interface IContainer {
  type: 'negative' | 'neutral' | 'positive';
}

export const AmountContainer = styled.div`
  margin-right: 20px;
`;

export const Container = styled.div<IContainer>`
  align-items: center;
  background: ${({ theme }) => theme.primaryWhite};
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.secondaryBlackTransLight};
  color: ${({ theme }) => theme.primaryBlueLight};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  padding: 10px 25px 10px 10px;
  width: 100%;
`;

export const Input = styled.input`
  cursor: pointer;
  height: 15px;
  margin-left: auto;
  width: 15px;
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  user-select: none;
`;
