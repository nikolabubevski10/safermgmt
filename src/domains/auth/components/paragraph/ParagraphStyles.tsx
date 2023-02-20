import styled from 'styled-components';

interface IContainer {
  align?: 'center' | 'left' | 'right';
}

export const Container = styled.p<IContainer>`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.weightMedium};
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};
  text-align: ${({ align }) => align || 'left'};

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 23px;
    line-height: 34px;
  }
`;
