import styled from 'styled-components';

export const TempPopup = styled.div`
  position: ${({ theme }) => theme.positionRelative};
`;
export const FieldIcon = styled.span`
  i {
    margin-left: 10px;
    cursor: ${({ theme }) => theme.cursorPointer};
  }
`;
export const PopupContent = styled.div`
  position: ${({ theme }) => theme.positionAbsolute};
  width: ${({ theme }) => theme.selectPopupWidth};
  height: ${({ theme }) => theme.selectPopupHeight};
  background: ${({ theme }) => theme.primaryWhite};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  left: -80px;
  top: 34px;
  padding: 15px;

  :before {
    position: ${({ theme }) => theme.positionAbsolute};
    content: '';
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent whitesmoke transparent;
    top: -20px;
    right: 15px;
  }
`;

export const PopupLine = styled.div`
  padding: 10px 0;
  cursor: ${({ theme }) => theme.cursorPointer};

  :hover {
    background: ${({ theme }) => theme.selectPopupHoverBG};
  }
`;
