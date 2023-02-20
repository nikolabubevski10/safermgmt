import styled from 'styled-components';

export const Container = styled.div``;

export const HeadTitle = styled.div``;

export const Title = styled.h1``;

export const PageContent = styled.div``;

export const ContentTable = styled.div`
  min-width: 700px;
`;

export const FieldSelect = styled.li`
  opacity: 1 !important;
  span {
    opacity: 50.05%;
    margin: 0 !important ;
  }
`;

export const TableFieldsContainerHead = styled.ul`
  li {
    font-family: ${({ theme }) => theme.fontNormal};
    color: ${({ theme }) => theme.secondaryFontDark};
    mix-blend-mode: ${({ theme }) => theme.mixBlendNormal};
    font-weight: ${({ theme }) => theme.weightSemibold};
    display: ${({ theme }) => theme.displayTypeFlex};
    align-items: ${({ theme }) => theme.alignItemCenter};
    padding: 20px 0;
    opacity: 50.05%;
    span {
      margin-right: 10px;
    }
  }

  display: ${({ theme }) => theme.displayTypeFlex};
  width: ${({ theme }) => theme.widthFull};
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: ${({ theme }) => theme.alignItemStart};
`;
export const TableFieldsContainer = styled.ul`
  li {
    font-family: ${({ theme }) => theme.fontNormal};
    color: ${({ theme }) => theme.secondaryFontDark};
    mix-blend-mode: ${({ theme }) => theme.mixBlendNormal};
    font-weight: ${({ theme }) => theme.weightRegular};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    display: ${({ theme }) => theme.displayTypeFlex};
    align-items: ${({ theme }) => theme.alignItemCenter};
    padding: 20px 0;
    span {
      margin-right: 10px;
    }
  }
  li:nth-child(2) {
    padding-top: 35px;
  }
  li:nth-child(3) {
    padding-top: 35px;
  }
  li:nth-child(4) {
    padding-top: 25px;
  }
  li:nth-child(5) {
    padding-top: 32px;
  }

  display: ${({ theme }) => theme.displayTypeFlex};
  width: ${({ theme }) => theme.widthFull};
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: ${({ theme }) => theme.alignItemStart};

  img {
    max-width: ${({ theme }) => theme.widthFull};
    width: 43px;
    border-radius: ${({ theme }) => theme.borderRadiusXXXXL};
  }
`;

export const Field = styled.li`
  font-family: ${({ theme }) => theme.fontNormal};
  color: ${({ theme }) => theme.secondaryFontDark};
  mix-blend-mode: ${({ theme }) => theme.mixBlendNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 20px 0;

  span {
    margin-right: 10px;
  }

  i.fa-ellipsis-v {
    cursor: ${({ theme }) => theme.cursorPointer};
  }
`;
export const LastField = styled.li`
  color: ${({ theme }) => theme.secondaryYellowMedium} !important;
  font-weight: ${({ theme }) => theme.weightBold} !important;
  cursor: ${({ theme }) => theme.cursorPointer};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
`;
export const FieldPointer = styled.li`
  cursor: ${({ theme }) => theme.cursorPointer};
`;
export const FieldIcon = styled.span`
  i {
    margin-left: 10px;
  }
  i.fa-exclamation-circle {
    color: ${({ theme }) => theme.secondaryRed};
    font-size: ${({ theme }) => theme.inputIconSize};
  }
`;

export const TableData = styled.div`
  height: 70vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Question = styled.div`
  margin-top: 5px;
  line-height: ${({ theme }) => theme.inputIconSize};
`;
