import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ theme }) => theme.positionAbsolute};
  top: 164px;
  left: 88px;
  width: ${({ theme }) => theme.profileUploadButton.width};
  height: ${({ theme }) => theme.profileUploadButton.height};
  background: ${({ theme }) => theme.primaryYellow};
  border-radius: ${({ theme }) => theme.borderRadiusHalf};
  border: 3px solid ${({ theme }) => theme.primaryWhite};
  cursor: ${({ theme }) => theme.cursorPointer};

  img {
    width: ${({ theme }) => theme.profileUploadButtonImage.width} !important;
    height: ${({ theme }) => theme.profileUploadButtonImage.height} !important;
    padding: 10px !important;
    border-radius: 0 !important;
    border: none !important;
    background: none !important;
  }
`;
