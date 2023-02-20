import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 8.125rem;
  height: 8.125rem;
  margin-right: 1.56rem;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
`;

export const ProfileName = styled.p`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: 800;
  font-size: 1.44rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.primaryBlueLight};
  margin-bottom: 5px;
`;
export const ProfileCompany = styled.p`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 1.375rem;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const LogoWrapper = styled.div`
  position: relative;
  filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.1));
`;

export const UploadBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: -2.06rem;
`;

interface IInput {
  error?: boolean;
}

export const Input = styled.input<IInput>`
  font-family: ${({ theme }) => theme.fontNormal};
  font-size: 16px;
  line-height: 19px;
  color: #233948;
  border: ${({ theme, error }) =>
    `1px solid ${error ? theme.secondaryRed : theme.secondaryGrayMedium}`};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: ${({ theme }) => theme.inputPadding};
  outline: none;
  width: 18.75rem;
  margin-bottom: 1.55rem;
  padding-right: 2rem;
`;

export const FormData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 39.5rem;
`;

export const InputTitle = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: 0.5;
  margin-bottom: 0.625rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-family: ${({ theme }) => theme.fontNormal};
  color: ${({ theme }) => theme.secondaryRed};
`;

export const ForgotPassword = styled.div`
  color: ${({ theme }) => theme.secondaryYellowMedium};
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.275rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const SpinnerContainer = styled.div`
  margin: 130px 0;
`;
