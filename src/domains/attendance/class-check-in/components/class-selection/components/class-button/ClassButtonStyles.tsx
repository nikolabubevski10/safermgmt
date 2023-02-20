import styled from 'styled-components';

export const Container = styled.div<{
  isSelected: boolean;
}>`
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 197px;
  height: 153px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: ${({ isSelected, theme }) =>
    isSelected && `0px 0px 80px 15px ${theme.secondaryGrayLight}`};
  cursor: pointer;
  z-index: 4;

  &:hover {
    box-shadow: 0px 0px 80px 15px ${({ theme }) => theme.secondaryGrayLight};
  }
`;

export const CourseName = styled.div<{
  isHovering: boolean;
  isSelected: boolean;
}>`
  font-family: ${({ theme }) => theme.font};
  font-size: 23px;
  line-height: 28px;
  font-weight: 800;
  color: ${({ isHovering, isSelected, theme }) =>
    ((isHovering || isSelected) && theme.primaryBlueLight) ||
    theme.secondaryBlueMedium};
  margin-top: 10px;
  max-width: 150px;
  max-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
