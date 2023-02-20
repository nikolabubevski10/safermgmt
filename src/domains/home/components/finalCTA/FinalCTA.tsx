import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Subheading,
  MobileBackground,
  DesktopBackground,
  Inner,
} from './FintalCTAStyles';
import { LightActionButton, ButtonText } from '../shared/sharedStyles';
import Triangle from '../shared/triangle/Triangle';
import mobileBg from './assets/mobileBg.png';
import desktopBg from './assets/desktopBg.png';

const headerText = `Ready to streamline the attendance tracking process, human error, and paper waste?`;

const p = `Join the community of educators 
who improved their workday`;

const buttonText = 'Request Free Demo';

interface Props {
  openContactModal: () => void;
}

const FinalCTA: React.FC<Props> = ({ openContactModal }: Props) => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tp = t(p);
  const tButtonText = t(buttonText);

  return (
    <Container>
      <MobileBackground src={mobileBg} />
      <DesktopBackground src={desktopBg} />
      <Inner>
        <h1>{tHeaderText}</h1>
        <Subheading>{tp}</Subheading>
        <LightActionButton onClick={openContactModal}>
          <ButtonText>{tButtonText}</ButtonText>
          <Triangle dark />
        </LightActionButton>
      </Inner>
    </Container>
  );
};

export default FinalCTA;
