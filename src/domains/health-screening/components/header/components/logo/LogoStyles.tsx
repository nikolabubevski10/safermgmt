import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const StyledSvg = styled.svg<{
  large?: boolean;
}>`
  height: 30px;
  width: 27px;

  ${({ large }) =>
    large &&
    `
  height: 45px;
  width: 40px;   
`}
`;
