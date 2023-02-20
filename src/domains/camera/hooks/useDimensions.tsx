import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';

interface IDimensions {
  height: number;
  width: number;
}

type returnType = {
  ref: React.RefObject<HTMLDivElement>;
  dimensions: IDimensions;
};

const useDimensions = (): returnType => {
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 550,
    height: 550,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = _.throttle(() => {
    if (!ref || !ref.current) return;
    setDimensions({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    });
  }, 20);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ref,
    dimensions,
  };
};

export default useDimensions;
