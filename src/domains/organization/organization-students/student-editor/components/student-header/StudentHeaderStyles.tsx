import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const InfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;

export const NameText = styled.div`
  color: ${({ theme }) => theme.primaryBlueLight};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  font-weight: ${({ theme }) => theme.weightBoldX};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  margin-bottom: 10px;
`;

export const SchoolText = styled.div`
  color: ${({ theme }) => theme.secondaryBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  font-weight: ${({ theme }) => theme.weightMedium};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
