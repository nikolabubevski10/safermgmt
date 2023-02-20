import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';

interface IDimensions {
  height: number;
  width: number;
}

type returnType = {
  ref: React.RefObject<HTMLDivElement>;
  dimensions: IDimensions;
  handleResize: _.DebouncedFunc<() => void>;
};

const initialDimensions = {
  width: 0,
  height: 0,
};

const useDimensions = (): returnType => {
  const [dimensions, setDimensions] = useState<IDimensions>(initialDimensions);
  const ref = useRef<HTMLDivElement>(null);

  const reset = async () => {
    setDimensions(initialDimensions);
  };

  const handleResize = _.throttle(() => {
    reset().then(() => {
      if (!ref || !ref.current) return;
      setDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    });
  }, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ref,
    dimensions,
    handleResize,
  };
};

export default useDimensions;
