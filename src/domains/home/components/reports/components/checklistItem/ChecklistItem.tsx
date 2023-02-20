import React from 'react';
import { Container, Svg } from './ChecklistItemStyles';

interface Props {
  itemText: string;
}

const ChecklistItem: React.FC<Props> = ({ itemText }: Props) => {
  return (
    <Container>
      <Svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="68" height="68" rx="10" fill="#009391" />
        <rect
          width="68"
          height="68"
          rx="10"
          fill="url(#paint0_linear)"
          fillOpacity="0.15"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 34C20 26.2807 26.2807 20 34 20C41.7193 20 48 26.2807 48 34C48 41.7193 41.7193 48 34 48C26.2807 48 20 41.7193 20 34ZM33.0568 39.9954L41.2269 31.9063C41.8746 31.2585 41.8746 30.2464 41.2269 29.5986C40.5791 28.9508 39.5669 28.9508 38.9192 29.5986L31.8422 36.6755L28.5872 33.7849C27.9394 33.1776 26.9273 33.2181 26.32 33.8658C25.7532 34.5136 25.7937 35.5257 26.4414 36.133L30.8301 40.0359C31.4779 40.6432 32.4495 40.6027 33.0568 39.9954Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="34"
            y1="-34"
            x2="-34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.000290329" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </Svg>
      <h4>{itemText}</h4>
    </Container>
  );
};

export default ChecklistItem;
