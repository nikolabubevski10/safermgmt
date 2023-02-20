import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  color: ${({ theme }) => theme.secondaryBlueDark};
  font-family: ${({ theme }) => theme.fontNormal};
`;

export const BulkImport = styled.p`
  color: ${({ theme }) => theme.secondaryYellowMedium};
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.275rem;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightFullBold};
  font-size: 2.19rem;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: ${({ theme }) => theme.inputPadding};
  padding-left: 2.5rem;
  font-size: 1.125rem;
  outline: none;
  width: 328px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
