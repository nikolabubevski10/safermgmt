import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;
