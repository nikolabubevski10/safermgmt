import styled from 'styled-components';

interface ISError {
  isError: boolean;
}
interface ISFile {
  isFile: boolean;
}

export const Container = styled.div``;
export const ModalWrapper = styled.div`
  position: ${({ theme }) => theme.positionFixed};
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.widthFull};
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.alignItemCenter};
  z-index: 9;
  min-height: ${({ theme }) => theme.heightFull};
  height: ${({ theme }) => theme.autoStyles};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;

export const ModalContent = styled.div`
  margin: 0 ${({ theme }) => theme.autoStyles};
  background: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  padding: 35px;
  width: ${({ theme }) => theme.profileModalContentWidthNormal};
  height: ${({ theme }) => theme.autoStyles} !important;
  max-width: ${({ theme }) => theme.profileModalContentWidthNormal} !important;
`;

export const ModalHeader = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};

  span {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightMedium} !important;
    font-size: ${({ theme }) => theme.modalSubheadingFontSize};
    color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const HeadTitle = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  h1 {
    line-height: ${({ theme }) => theme.lineHeightModalHead};
    font-size: ${({ theme }) => theme.font30};
    font-weight: ${({ theme }) => theme.weightRegular};
  }

  i {
    color: ${({ theme }) => theme.primaryBlueDark};
    cursor: ${({ theme }) => theme.cursorPointer};
    font-size: ${({ theme }) => theme.filterIconSize};
    padding: 12px 15px;
  }

  i:hover {
    background: rgb(12 63 98 / 10%);
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
  }
`;
export const HeadSubTitle = styled.div`
  margin-top: 12px;
`;
export const ModalBody = styled.div<ISError>`
  position: ${({ theme }) => theme.positionRelative};
  margin-top: 38px;
  margin-bottom: 20px;
  height: ${({ theme }) => theme.profileModalHeightNormal};
  width: ${({ theme }) => theme.widthFull};

  :before {
    position: ${({ theme }) => theme.positionAbsolute};
    content: '';
    border: 1px dashed ${({ theme }) => theme.lightGray};
    width: ${({ theme }) => theme.widthFull};
    height: ${({ theme }) => theme.profileModalHeightNormal};
    box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
    border-radius: 10px;

    ${({ isError, theme }) =>
      isError &&
      `
  border: 1px dashed ${theme.secondaryRed};
}
`}
  }

  button {
    margin-top: 0px;
    width: ${({ theme }) => theme.buttonWidthNormal};
    height: ${({ theme }) => theme.buttonHeightNormal};
  }

  input {
    position: ${({ theme }) => theme.positionAbsolute};
    width: ${({ theme }) => theme.widthFull};
    height: ${({ theme }) => theme.profileModalHeightNormal};
    top: 0;
    left: 0;
    opacity: 0;
    cursor: ${({ theme }) => theme.cursorPointer};
  }
`;

export const UploadContainer = styled.div<ISFile>`
  width: ${({ theme }) => theme.widthFull};
  height: ${({ theme }) => theme.heightFull};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  flex-direction: ${({ theme }) => theme.flexColumn};
  padding-top: 50px;

  ${({ isFile }) =>
    isFile &&
    `
padding-top: 0px;
}
`}

  span {
    font-weight: ${({ theme }) => theme.weightSemibold};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    margin-top: 10px;
    color: ${({ theme }) => theme.secondaryFontDark};
    // opacity: 50.5%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizeLarge};
    color: ${({ theme }) => theme.secondaryFontDark};
    font-weight: ${({ theme }) => theme.fontStyleNormal};
    opacity: 0.5;
  }
`;
export const UploadText = styled.span``;
export const UploadInstruction = styled.p``;

export const CustomButton = styled.div`
  width: ${({ theme }) => theme.widthFull};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.alignItemCenter};
  text-align: ${({ theme }) => theme.alignItemCenter};
  flex-direction: ${({ theme }) => theme.flexColumn};

  span {
    color: ${({ theme }) => theme.secondaryYellowMedium};
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    font-weight: ${({ theme }) => theme.weightBold};
    margin-top: 20px;
    cursor: ${({ theme }) => theme.cursorPointer};
  }
`;
export const ErrorContainer = styled.div`
  align-items: ${({ theme }) => theme.alignItemEnd};
  justify-content: ${({ theme }) => theme.alignItemEnd};
  text-align: end;
  margin-top: -10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.secondaryRed};
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;
export const RangeSliderCover = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceAround};
  margin-bottom: 30px;
`;
