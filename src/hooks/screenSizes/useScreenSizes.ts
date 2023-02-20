import { useState, useEffect, useCallback } from 'react';
import checkSizeRanges from './checkSizeRanges';
import getWidth from './getWidth';
import { ISizes } from './types';
import _ from 'lodash';
import { Theme } from '../../assets/styles/Theme';

function useScreenSizes(): ISizes {
  const [screenSizes, setScreenSizes] = useState<ISizes>(
    checkSizeRanges(getWidth(), Theme.sizeRanges),
  );

  const handleResize = useCallback(
    _.throttle(() => {
      const newScreenSizes = checkSizeRanges(getWidth(), Theme.sizeRanges);
      setScreenSizes((prev: { [x: string]: boolean }) => {
        if (_.isEqual(prev, newScreenSizes)) return prev;
        return newScreenSizes;
      });
    }, 200),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return screenSizes;
}

export default useScreenSizes;
