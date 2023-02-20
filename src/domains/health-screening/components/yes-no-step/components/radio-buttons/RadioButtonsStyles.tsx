import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Label = styled.label``;

export const Radio = styled.input.attrs(() => ({
  type: 'radio',
}))`
  align-items: center;
  cursor: pointer;
  display: flex;

  :after {
    background-color: ${({ theme }) => theme.secondaryGrayLight};
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.primaryBlueLight};
    content: '';
    min-height: 16px;
    min-width: 16px;
    position: relative;
    right: 0;
    top: -1px;
  }

  &:checked:after {
    background-color: ${({ theme }) => theme.primaryWhite};
    border-radius: 100%;
    border: 4px solid ${({ theme }) => theme.primaryBlueLight};
    content: '';
    min-height: 16px;
    min-width: 16px;
    position: relative;
    right: 0;
    top: -1px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  margin-left: 15px;
  position: relative;
  :first-child {
    margin-left: 0px;
  }
`;
