import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './HeadingStyles';

interface Props {
  align?: 'center' | 'left' | 'right';
  children: string;
}

const Heading: React.FC<Props> = ({ align, children }: Props) => {
  const { t } = useTranslation();
  const text = t(children);

  return <Container align={align}>{text}</Container>;
};

export default Heading;
