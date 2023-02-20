import styled from 'styled-components';
import { MainActionButton } from '../../shared/SharedStyles';

export const CameraContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RetakeButton = styled.div`
  margin-top: 30px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryWhite};
  z-index: 1;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  font-family: ${({ theme }) => theme.font};
  font-size: 18px;
  line-height: 22px;
  font-weight: ${({ theme }) => theme.weightBold};
  text-align: center;
  color: ${({ theme }) => theme.secondaryYellowMedium};

  :hover {
    color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 35px;
    margin-top: 20px;
    text-align: center;
  }

  ${MainActionButton} {
    margin-top: 50px;
  }
`;

export const DisabledText = styled.div`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  line-height: 19px;
  font-weigth: 600;
  text-align: center;
  color: ${({ theme }) => theme.secondaryGrayDark};
`;

export const DisabledSubtext = styled.div`
  margin-top: 3px;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 16px;
  font-weigth: 400;
  text-align: center;
  color: ${({ theme }) => theme.secondaryGrayDark};
`;

export const DisabledOverlayContainer = styled.div`
  cursor: pointer;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
