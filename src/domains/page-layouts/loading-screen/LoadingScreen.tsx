import React from 'react';

import {
  Container,
  LoaderContainer,
  Loader,
  Circle,
} from './LoadingScreenStyles';

interface Props {
  isVisible?: boolean;
}

const SplashScreen: React.FC<Props> = ({ isVisible }: Props) => {
  return isVisible ? (
    <Container>
      <LoaderContainer>
        <Loader>
          <Circle />
        </Loader>
      </LoaderContainer>
    </Container>
  ) : null;
};

export default SplashScreen;
