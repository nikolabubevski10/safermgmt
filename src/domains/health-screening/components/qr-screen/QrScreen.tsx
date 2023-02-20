import React from 'react';
import { Container } from './QrScreenStyles';
import Generator from './ components/generator/Generator';

const mockId = '035052340jkjoiewjro2i3u2304u203u029fjajfapfpoeiruo3u2034u023';

const QrScreen: React.FC = () => {
  return (
    <Container>
      <Generator value={mockId} />
    </Container>
  );
};

export default QrScreen;
