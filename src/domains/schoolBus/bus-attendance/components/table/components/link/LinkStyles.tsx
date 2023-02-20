import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.secondaryYellowMedium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
