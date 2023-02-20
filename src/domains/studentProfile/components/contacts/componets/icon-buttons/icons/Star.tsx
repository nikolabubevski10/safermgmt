import React from 'react';
import { Svg } from './starIconStyles';

interface Props {
  isActive: boolean;
}

const Star: React.FC<Props> = (props: Props) => {
  const { isActive } = props;
  return (
    <Svg
      width="15"
      isActive={isActive}
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <path d="M13.9847 5.89138C14.2517 5.63109 14.346 5.24907 14.2308 4.89395C14.1153 4.53883 13.8146 4.28533 13.4451 4.23153L10.1596 3.75415C10.0197 3.73377 9.89876 3.64601 9.83627 3.51912L8.36743 0.542323C8.2025 0.207854 7.86776 0 7.49471 0C7.12193 0 6.78719 0.207854 6.62227 0.542323L5.15316 3.5194C5.09067 3.64628 4.96949 3.73404 4.82956 3.75442L1.5441 4.23181C1.17485 4.28533 0.873804 4.5391 0.758329 4.89422C0.643126 5.24934 0.737408 5.63136 1.00449 5.89165L3.38164 8.20875C3.48299 8.30765 3.52945 8.45003 3.50554 8.58914L2.94474 11.861C2.89502 12.149 2.97055 12.4291 3.15694 12.65C3.44658 12.9943 3.95222 13.0992 4.35652 12.8867L7.29474 11.3418C7.41755 11.2774 7.57215 11.2779 7.69469 11.3418L10.6332 12.8867C10.7761 12.962 10.9285 13 11.0858 13C11.373 13 11.6453 12.8723 11.8325 12.65C12.0191 12.4291 12.0944 12.1485 12.0447 11.861L11.4836 8.58914C11.4597 8.44976 11.5062 8.30765 11.6075 8.20875L13.9847 5.89138Z" />
    </Svg>
  );
};

export default Star;
