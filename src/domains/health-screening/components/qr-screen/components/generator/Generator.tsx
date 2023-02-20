import React from 'react';
import { useTranslation } from 'react-i18next';
import QRcode from 'qrcode.react';
import { Container, BigText, SmallText } from './GeneratorStyles';

const thanks = 'Thank You!';
const instructions = 'Please present this QR code at Check in';

interface Props {
  value: string;
}

const Generator: React.FC<Props> = ({ value }: Props) => {
  const { t } = useTranslation();
  const tThanks = t(thanks);
  const tInstructions = t(instructions);
  return (
    <Container>
      <QRcode id="qrRef" value={value} size={300} includeMargin={true} />
      <BigText>{tThanks}</BigText>
      <SmallText>{tInstructions}</SmallText>
    </Container>
  );
};

export default Generator;
