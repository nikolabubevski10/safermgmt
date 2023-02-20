import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 25px;
  width: 100%;
  :first-child {
    margin-top: 10px;
  }
`;

export const Text = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.primaryBlueDark};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 1;
  outline: none;

  :hover {
    font-weight: ${({ theme }) => theme.weightBold};
    text-decoration: underline;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContactContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const TopContainer = styled.div`
  color: ${({ theme }) => theme.primaryBlueDark};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  user-select: none;
`;
