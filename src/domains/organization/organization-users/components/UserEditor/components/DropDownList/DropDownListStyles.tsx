import styled from 'styled-components';

export const DropList = styled.div`
  padding: 0.625rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  position: absolute;
  top: 5.31rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryWhite};
  z-index: 1;
`;

export const DropLine = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const LevelTitle = styled.span`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 0.81rem;
  line-height: 0.94rem;
  color: ${({ theme }) => theme.secondaryFontDark};
  margin-left: 0.625rem;
`;
