import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 8.125rem;
  height: 8.125rem;
  margin-right: 1.56rem;
  border: 3px solid ${({ theme }) => theme.primaryWhite};
`;

export const LogoWrapper = styled.div`
  position: relative;
  filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.1));
`;

export const ProfileName = styled.p`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: 800;
  font-size: 1.44rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.primaryBlueLight};
  margin-bottom: 10px;
`;

export const ProfileId = styled.p`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 1.44rem;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.primaryBlueDark};
  margin-bottom: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
