import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  width: 100%;
  z-index: 1;
`;

export const SelectedSchoolContainer = styled.div`
  align-items: flex-start;
  display: flex;
`;

export const SelectedSchool = styled.button`
  appearance: none;
  border: none;
  color: ${({ theme }) => theme.primaryWhite};
  flex-grow: 1;
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightFullBold};
  line-height: 19px;
  margin-right: 5px;
  outline: none;
  text-align: left;
`;

export const School = styled.button`
  appearance: none;
  border: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryWhite};
  cursor: poiner;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weightMedium};
  line-height: 17px;
  margin-bottom: 15px;
  opacity: 0.65;
  outline: none;
  text-align: left;

  :first-child {
    margin-top: 15px;
  }

  :hover {
    font-weight: ${({ theme }) => theme.weightFullBold};
  }

  :last-child {
    margin-bottom: 0px;
  }
`;

export const RestContainer = styled.div<{
  isOpen: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${({ isOpen }) =>
    !isOpen &&
    `
    max-height: 0px;
  `}
`;
