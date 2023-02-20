import React from 'react';
import MathIcon from './components/math-icon/MathIcon';
import HistoryIcon from './components/history-icon/HistoryIcon';
import EnglishIcon from './components/english-icon/EnglishIcon';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

interface RandIconProps {
  isHovering: boolean;
  isSelected: boolean;
  courseName: string;
}

const RandomIcon: React.FC<RandIconProps> = ({
  isHovering,
  isSelected,
  courseName,
}: RandIconProps) => {
  const frac =
    alphabet.indexOf(courseName.charAt(0).toLowerCase()) / alphabet.length;
  if (frac <= 0.3333333) {
    return <MathIcon isActive={isHovering || isSelected} />;
  } else if (frac <= 0.66666666) {
    return <HistoryIcon isActive={isHovering || isSelected} />;
  } else {
    return <EnglishIcon isActive={isHovering || isSelected} />;
  }
};

export default RandomIcon;
