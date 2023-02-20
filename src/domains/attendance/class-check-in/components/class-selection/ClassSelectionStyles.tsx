import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 50px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const MainActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  width: 258px;
  height: 60px;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    #fdd119;
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
`;

export const ButtonText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryBlueDark};
`;
