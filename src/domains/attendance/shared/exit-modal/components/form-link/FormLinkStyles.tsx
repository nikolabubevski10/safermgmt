import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 8px;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.modalFormLinkFontSize};
  line-height: ${({ theme }) => theme.modalFormLinkLineHeight};
  color: ${({ theme }) => theme.secondaryYellowMedium};
  font-weight: ${({ theme }) => theme.weightBold};
`;
