import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
`;

export const CardCover = styled.div`
  width: 502px;
  min-height: 312px;
  background: ${({ theme }) => theme.slightGrayBackground};
  border-radius: 20px;
  margin-top: 25px;
`;
export const CardHead = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  padding-bottom: 0px;
`;
export const ProfileContainer = styled.div`
  background: url(Image.png);
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  box-sizing: border-box;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const HeadData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
`;
export const NameContainer = styled.span`
  font-weight: 800;
  font-size: 23px;
  line-height: 28px;
  color: ${({ theme }) => theme.primaryBlueLight};
`;
export const ContactRelation = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const AdditionalInfoContainer = styled.div`
  padding: 0px 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Block = styled.div`
  width: 145px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;
export const FieldTitle = styled.span`
  font-weight: ${({ theme }) => theme.weightSemibold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
  mix-blend-mode: normal;
  opacity: 0.5;
`;
export const FieldValue = styled.span`
  margin-top: 10px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
