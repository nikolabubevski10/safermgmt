import styled from 'styled-components';

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
  height: ${({ theme }) => theme.autoStyles};
  max-width: ${({ theme }) => theme.modalWidth};
  margin: 0 ${({ theme }) => theme.autoStyles};
  background: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  padding: 35px;
  width: ${({ theme }) => theme.widthFull};

  input[type='submit'] {
    background: linear-gradient(
        224.33deg,
        rgba(0, 0, 0, 0.2) 5.75%,
        rgba(255, 255, 255, 2e-5) 71.65%
      ),
      ${({ theme }) => theme.primaryYellow};
    background-blend-mode: overlay, normal;
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    max-width: ${({ theme }) => theme.buttonWidthNormal};
    height: ${({ theme }) => theme.buttonHeightNormal};
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightBold};
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    line-height: ${({ theme }) => theme.lineHeight};
    text-align: ${({ theme }) => theme.alignItemCenter};
    color: ${({ theme }) => theme.secondaryBlueDark};
    margin: 0 ${({ theme }) => theme.autoStyles};
    width: ${({ theme }) => theme.widthFull};
    border: none;
    cursor: ${({ theme }) => theme.cursorPointer};
    transition: 0.3s all ease-in-out;
  }

  input[type='submit']:hover {
    background: ${({ theme }) => theme.secondaryBlueDark};
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const ModalHeader = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};

  h1 {
    font-size: ${({ theme }) => theme.fontSizeBigH1};
    line-height: ${({ theme }) => theme.lineHeightModalHead};
  }

  i {
    color: ${({ theme }) => theme.primaryBlueDark};
    cursor: ${({ theme }) => theme.cursorPointer};
    font-size: ${({ theme }) => theme.modalIconFontSizeNormal};
    padding: 12px 15px;
  }

  i:hover {
    background: rgb(12 63 98 / 10%);
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
  }
`;

export const QuestionsContainer = styled.div`
  max-height: ${({ theme }) => theme.maxHeightModalQuestions};
  overflow-y: ${({ theme }) => theme.autoStyles};
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${({ theme }) => theme.secondaryRed};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: 15px;
  margin-top: 20px;

  ul p {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.fontWeightNormal};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    line-height: ${({ theme }) => theme.modalLabelLineHeight};
    color: ${({ theme }) => theme.primaryWhite};
    padding: 5px 0 5px 20px;
    position: relative;
  }

  ul p:before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
    background: ${({ theme }) => theme.primaryWhite};
    left: 2px;
    top: 9px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollTrackBGLightGray};
    -webkit-border-radius: ${({ theme }) => theme.borderRadiusLarge};
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: ${({ theme }) => theme.borderRadiusLarge};
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    background: ${({ theme }) => theme.scrollBGblueDark};
  }
`;

export const QuestionTop = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  margin-bottom: 10px;

  span {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightBold};
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    line-height: ${({ theme }) => theme.lineHeight};
    text-align: right;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const Qheader = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};

  h2 {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightFullBold};
    font-size: ${({ theme }) => theme.modalIconFontSize};
    line-height: ${({ theme }) => theme.modalSubheadingLineHeight};
    color: ${({ theme }) => theme.primaryWhite};
    margin-left: 10px;
  }
  i {
    color: ${({ theme }) => theme.primaryWhite};
    font-size: ${({ theme }) => theme.modalIconFontSize};
  }
`;

export const UserInfo = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  margin-top: 40px;

  img {
    width: ${({ theme }) => theme.modalUserProfileSize.width};
    height: ${({ theme }) => theme.modalUserProfileSize.height};
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
    border: 3px solid ${({ theme }) => theme.primaryWhite};
    box-sizing: border-box;
    filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.1));
  }
`;
export const UserName = styled.div`
  margin-left: 15px;
  h3 {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightBoldX};
    font-size: ${({ theme }) => theme.modalUserinfoFontSize};
    line-height: ${({ theme }) => theme.modalUserinfoLineHeight};
    color: ${({ theme }) => theme.primaryBlueLight};
  }

  h3:nth-child(2) {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightMedium};
    font-size: ${({ theme }) => theme.fontSizeXXL};
    line-height: ${({ theme }) => theme.modalIconFontSizeNormal};
    color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const EmailForm = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  margin-top: 40px;
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
`;

export const FormLeft = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: column;
  width: 48%;
`;

export const FormField = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex} !important;
  flex-direction: column !important;
  margin-bottom: 30px !important;

  label {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightSemibold};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    line-height: ${({ theme }) => theme.modalLabelLineHeight};
    color: ${({ theme }) => theme.secondaryFontDark};
    mix-blend-mode: ${({ theme }) => theme.mixBlendNormal};
    opacity: 0.5;
    margin-bottom: 7px;
  }

  input[type='text'] {
    background: rgba(12, 63, 98, 0.05);
    border: 1px solid rgba(35, 57, 72, 0.05);
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    height: ${({ theme }) => theme.modalInputHeight};
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.fontWeightNormal};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    padding-left: 10px;
  }
`;

export const FormRight = styled.div`
  width: 48%;

  display: ${({ theme }) => theme.displayTypeFlex} !important;
  flex-direction: column !important;
  margin-bottom: 30px !important;
  textarea {
    background: rgba(12, 63, 98, 0.05);
    border: 1px solid rgba(35, 57, 72, 0.05);
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    height: ${({ theme }) => theme.modalFormHeight};
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.fontWeightNormal};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    padding-left: 10px;
  }

  label {
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightSemibold};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    line-height: ${({ theme }) => theme.modalLabelLineHeight};
    color: ${({ theme }) => theme.secondaryFontDark};
    mix-blend-mode: ${({ theme }) => theme.mixBlendNormal};
    opacity: 0.5;
    margin-bottom: 7px;
  }
`;

export const SendButton = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.alignItemCenter};
  width: ${({ theme }) => theme.widthFull};
`;

export const MessageHeader = styled.div`
  justify-content: flex-end !important;
  text-align: end;
  i {
    color: ${({ theme }) => theme.primaryBlueDark};
    cursor: ${({ theme }) => theme.cursorPointer};
    font-size: ${({ theme }) => theme.modalIconFontSizeNormal};
    padding: 12px 15px;
  }

  i:hover {
    background: rgb(12 63 98 / 10%);
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
  }
`;
export const MessageBody = styled.div`
  margin: 50px 0 0;

  img {
    display: ${({ theme }) => theme.displayTypeFlex};
    text-align: ${({ theme }) => theme.alignItemCenter};
    justify-content: ${({ theme }) => theme.alignItemCenter};
    margin: 0 ${({ theme }) => theme.autoStyles};
    margin-bottom: 25px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizeBigH1};
    line-height: ${({ theme }) => theme.lineHeightModalHead};
    text-align: ${({ theme }) => theme.alignItemCenter};
    margin-bottom: 10px;
  }

  p {
    font-weight: ${({ theme }) => theme.weightMedium};
    font-size: ${({ theme }) => theme.modalSubheadingFontSize};
    line-height: ${({ theme }) => theme.modalSubheadingLineHeight};
    text-align: ${({ theme }) => theme.alignItemCenter};
  }
`;

export const ButtonContainer = styled.div`
  text-align: ${({ theme }) => theme.alignItemCenter};
  margin-top: 35px;
`;
