import styled from 'styled-components';
import CheckImg from '../../assets/checkico.svg';
import TimesImg from '../../assets/timesico.svg';

export const Container = styled.div`
  margin-top: 30px;
  font-family: ${({ theme }) => theme.fontBold};
  font-style: ${({ theme }) => theme.fontStyleNormal};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProfileImage = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.secondaryBlackTransLight};
  overflow: hidden;
  margin-right: 25px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ProfileInfo = styled.div``;

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.weightBoldX};
  font-size: 23px;
  line-height: 28px;
  color: ${({ theme }) => theme.primaryBlueLight};
`;

export const SchoolName = styled.div`
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
  padding: 10px 0;
`;

export const Grade = styled.div``;

export const GradeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
  div {
    margin-right: 20px;
    display: flex;
  }
`;

export const Enrolled = styled.div``;

export const NotEnrolled = styled.div``;

export const IcoCheck = styled.div`
  width: 19px;
  height: 19px;
  background: url(${CheckImg});
  margin-right: 10px !important;
`;

export const IcoTimes = styled.div`
  width: 19px;
  height: 19px;
  background: url(${TimesImg});
  margin-right: 10px !important;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const GroupInner1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
  max-width: auto;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    max-width: 625px;
  }
`;

export const GroupInner2 = styled.div`
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const FillerDiv = styled.div`
  flex: 1;
  margin-left: 32px;
`;
