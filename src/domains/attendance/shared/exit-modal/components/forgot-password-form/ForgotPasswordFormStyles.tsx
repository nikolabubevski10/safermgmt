import styled from 'styled-components';

export const Form = styled.form``;

export const FormHeaderContainer = styled.div`
  position: relative;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const FormHeader = styled.div``;

export const FormHeaderParagraphContainer = styled.div`
  margin-top: 10px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 15px;
  }
`;

export const Heading = styled.h2`
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 35px;
    line-height: 43.68px;
  }
`;

export const Subheading = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: ${({ theme }) => theme.modalSubheadingFontSize};
  line-height: ${({ theme }) => theme.modalSubheadingLineHeight};
  color: ${({ theme }) => theme.primaryBlueDark};

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: ${({ theme }) => theme.modalSubheadingFontSizeMobile};
    line-height: ${({ theme }) => theme.modalSubheadingLineHeightMobile};
  }
`;

export const NotificationContainer = styled.div`
  margin-top: 35px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const FormGroups = styled.div`
  margin-top: 35px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 20px;
  }
`;

export const FormLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InnerTopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
