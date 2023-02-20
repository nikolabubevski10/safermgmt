import styled from 'styled-components';

export const Container = styled.div``;

export const FormData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 39.5rem;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldContainer = styled.div`
  margin-top: 30px;
`;
export const Label = styled.span`
  font-family: ${({ theme }) => theme.fontBold};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const CardWrapper = styled.div``;

export const Row = styled.div`
  margin-top: 20px;
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
