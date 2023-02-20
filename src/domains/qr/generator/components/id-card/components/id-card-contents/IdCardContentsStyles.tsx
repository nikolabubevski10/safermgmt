import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 10px 20px 10px;
  width: 100%;
`;

export const IdBgImg = styled.img`
  position: absolute;
  z-index: 0;
  max-width: 221px;
`;

export const IdCardInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 15px;
  position: relative;
  width: 100%;
`;

export const IdCard = styled.div`
  background-color: ${({ theme }) => theme.primaryBlueLight};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  flex-basis: 1;
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  max-height: 385px;
  max-width: 221px;
  min-height: 385px;
  min-width: 0px;
  min-width: 221px;
  overflow: hidden;
  position: relative;
`;

export const FakeAvatar = styled.div`
  background-color: ${({ theme }) => theme.primaryBlueDark};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  min-height: 80px;
  max-height: 80px;
  margin-top: 17px;
  min-width: 80px;
  max-width: 80px;
`;

export const NameText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightMedium};
  line-height: ${({ theme }) => theme.fontSizeLarge};
  margin-top: 40px;
  text-align: center;
  width: 100%;
`;

export const InfoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const LabelText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.weightMedium}
  line-height: ${({ theme }) => theme.lineHeightSmall};
  margin-top: 10px;
  text-align: left;
  width: 100%;
  opacity: 0.7;
`;

export const InfoText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.weightMedium}
  line-height: ${({ theme }) => theme.lineHeightSmall};
  margin-top: 4px;
`;

export const SideAQrContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const SideAQrBackground = styled.div`
  padding: 7px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
`;

export const SideBQrContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const SideBQrBackground = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
`;
