import styled from 'styled-components';

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.875rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.tableRowBorderGrayLight};
`;

export const HeaderId = styled.div`
  width: 31%;
  align-items: left;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: 0.5;
`;

export const HeaderName = styled.div`
  width: 28%;
  align-items: left;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: 0.5;
`;

export const HeaderEmail = styled.div`
  width: 39%;
  align-items: left;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: 0.5;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.tableRowBorderGrayLight};
  padding: 1.25rem 0;
`;

export const TableCellName = styled.div`
  display: flex;
  width: 28%;
  align-items: center;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.tableRowLineHeight};
  color: ${({ theme }) => theme.secondaryFontDark};

  span {
    text-decoration: underline;
  }
`;

export const TableCellId = styled.div`
  width: 31%;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.tableRowLineHeight};
  color: ${({ theme }) => theme.secondaryFontDark};
`;

export const TableCellEmail = styled.div`
  width: 39%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.tableRowLineHeight};
  color: ${({ theme }) => theme.secondaryFontDark};
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 2.69rem;
  height: 2.69rem;
  margin-right: 0.94rem;
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 0.94rem;
  color: ${({ theme }) => theme.secondaryFontDark};
`;

export const SpinnerContainer = styled.div`
  margin: 150px 0 0 0;
`;
