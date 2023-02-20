import styled from 'styled-components';

interface ISvg {
  isMessageSent: boolean;
}

export const Svg = styled.svg<ISvg>`
  fill: ${({ theme }) => theme.primaryBlueDark};
  height: ${({ theme }) => theme.contactModalCloseButtonSize};
  width: ${({ theme }) => theme.contactModalCloseButtonSize};
  cursor: pointer;
  position: relative;
  top: -5px;
  left: 5px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    position: ${({ isMessageSent }) => isMessageSent && 'absolute'};
    top: ${({ isMessageSent }) => isMessageSent && '25px'};
    right: ${({ isMessageSent }) => isMessageSent && '25px'};
    left: ${({ isMessageSent }) => isMessageSent && 'unset'};
  }
`;
