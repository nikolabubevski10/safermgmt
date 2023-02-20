import styled from 'styled-components';

interface IContainer {
  type: 'error' | 'success';
}
interface IText {
  type: 'error' | 'success';
}

export const Container = styled.div<IContainer>`
  padding: 10px 15px;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme, type }) =>
    (type === 'success' && theme.secondaryGreenLight) ||
    (type === 'error' && theme.secondaryRedLight)};
  border-radius: ${({ theme }) => theme.notificationBorderRadius};
`;

export const IconContainer = styled.div`
  margin-right: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p<IText>`
  font-size: ${({ theme }) => theme.notificationTextFontSize};
  line-height: ${({ theme }) => theme.notificationTextLineHeight};
  color: ${({ theme, type }) =>
    (type === 'success' && theme.secondaryGreenDark) ||
    (type === 'error' && theme.secondaryRed)};

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    font-size: ${({ theme }) => theme.notificationTextFontSizeMobile};
    line-height: ${({ theme }) => theme.notificationTextLineHeightMobile};
  }
`;
