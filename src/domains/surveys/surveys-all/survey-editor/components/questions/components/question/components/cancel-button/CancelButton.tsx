import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Svg, Text } from './CancelButtonStyles';

interface Props {
  onClick: () => void;
}

const text = 'Cancel';

const CancelButton: React.FC<Props> = ({ onClick }: Props) => {
  const { t } = useTranslation();
  const tText = t(text);
  return (
    <Container onClick={onClick}>
      <Svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.6129 0.209705L1.70711 0.292893L6.5 5.085L11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893C13.0676 0.653377 13.0953 1.22061 12.7903 1.6129L12.7071 1.70711L7.915 6.5L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071C12.3466 13.0676 11.7794 13.0953 11.3871 12.7903L11.2929 12.7071L6.5 7.915L1.70711 12.7071C1.31658 13.0976 0.683418 13.0976 0.292893 12.7071C-0.0675907 12.3466 -0.0953197 11.7794 0.209705 11.3871L0.292893 11.2929L5.085 6.5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.623337 -0.0375504 1.12751 -0.0883874 1.5114 0.140381L1.6129 0.209705Z"
          fill="#233948"
        />
      </Svg>
      <Text>{tText}</Text>
    </Container>
  );
};

export default CancelButton;
