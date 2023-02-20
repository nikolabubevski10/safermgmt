import React from 'react';
import { LoaderContainer, Loader, Circle } from './SpinnerStyles';

const Spinner: React.FC = () => {
  return (
    <LoaderContainer>
      <Loader>
        <Circle />
      </Loader>
    </LoaderContainer>
  );
};

export default Spinner;
