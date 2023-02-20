import styled from 'styled-components';

export const BoldSubText = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: 19px;
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 16px;
`;

export const QuestionsContainer = styled.div<{
  isEmpty: boolean;
}>`
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  display: flex;
  flex-direction: column;
  justify-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'flex-start')};
  margin-bottom: 25px;
  margin-top: 30px;
  min-height: ${({ isEmpty }) => (isEmpty ? '324px' : '0px')};
  width: 100%;

  ${BoldSubText} {
    margin-top: 10px;
  }

  ${SubText} {
    margin-top: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  display: flex;
`;

export const ErrorMessage = styled.div`
  margin-right: 20px;
  margin-left: auto;
  font: ${({ theme }) => theme.font};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weightRegular};
  color: ${({ theme }) => theme.secondaryRed};
`;
