import styled from 'styled-components';

interface IContainer {
  align?: 'center' | 'left' | 'right';
}

export const Container = styled.h2<IContainer>`
  text-align: ${({ align }) => align || 'left'};
`;
