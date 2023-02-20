import styled from 'styled-components';

export const AvatarImg = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.secondaryGrayMedium};
`;
