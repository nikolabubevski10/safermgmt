import React, { useState, useEffect } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

interface Props {
  slideValue: number;
  setSlideValue: (x: number) => void;
}

const RangeSlider: React.FC<Props> = (props: Props) => {
  const { slideValue, setSlideValue } = props;

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(slideValue);
  }, []);

  const handleChange = (value: number) => {
    setValue(value);
    setSlideValue(value);
  };
  return (
    <div>
      <div>
        <Slider min={0} max={100} value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default RangeSlider;
