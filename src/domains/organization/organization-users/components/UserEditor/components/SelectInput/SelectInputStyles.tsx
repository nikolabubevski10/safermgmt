import styled from 'styled-components';

export const SelectInput = styled.div`
  position: relative;
`;

export const TriangeWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  fill: ${({ theme }) => theme.secondaryBlack};
`;
