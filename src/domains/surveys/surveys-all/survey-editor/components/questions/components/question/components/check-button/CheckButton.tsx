import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Svg, Text } from './CheckButtonStyles';

interface Props {
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const text = 'Save';

const CheckButton: React.FC<Props> = ({ onMouseDown }: Props) => {
  const { t } = useTranslation();
  const tText = t(text);
  return (
    <Container onMouseDown={onMouseDown}>
      <Svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.6876 0.304268C17.3053 -0.0916435 16.6744 -0.102622 16.2785 0.279742C16.2702 0.287742 16.262 0.295917 16.254 0.304268L5.96389 10.5944L1.68893 6.31943C1.29302 5.93707 0.662129 5.94804 0.279765 6.34395C-0.0932551 6.73017 -0.0932551 7.34243 0.279765 7.72865L5.25931 12.7082C5.6485 13.0973 6.27933 13.0973 6.66847 12.7082L17.6631 1.71349C18.059 1.33107 18.07 0.700179 17.6876 0.304268Z"
          fill="#233948"
        />
      </Svg>
      <Text>{tText}</Text>
    </Container>
  );
};

export default CheckButton;
