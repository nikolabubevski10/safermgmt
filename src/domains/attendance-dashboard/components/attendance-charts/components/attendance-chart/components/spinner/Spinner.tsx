import React from 'react';
import { LoaderContainer, Loader, Circle } from './SpinnerStyles';

const Spinner: React.FC = () => {
  return (
    <LoaderContainer>
      <Loader>
        <Circle size={40} />
      </Loader>
    </LoaderContainer>
  );
};

export default Spinner;
