import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-left: 20px;
`;

export const Container = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  background-color: ${({ theme }) => theme.primaryWhite};
  min-height: ${({ theme }) => theme.heightFull};
  width: ${({ theme }) => theme.widthFull};
`;

export const FiltersContainer = styled.div`
  margin-top: 26px;
  width: ${({ theme }) => theme.widthFull};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 20px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
    row-gap: 15px;
  }
`;

export const Header = styled.div`
  width: ${({ theme }) => theme.widthFull};
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    align-items: flex-end;
  }
`;

export const Heading = styled.h2``;

export const TableContainer = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex: 1;
  margin-top: 10px;
  width: ${({ theme }) => theme.widthFull};
`;
