import React from 'react';
import { Container, Frame, H3Container } from './HeroStyles';
import { MainActionButton, ButtonText } from '../shared/sharedStyles';
import { useTranslation } from 'react-i18next';
import DotGroup1 from './components/dots/dotGroup1/DotGroup1';
import DotGroup2 from './components/dots/dotGroup2/DotGroup2';
import DotGroup3 from './components/dots/dotGroup3/DotGroup3';
import DotGroup4 from './components/dots/dotGroup4/DotGroup4';
import DotGroup5 from './components/dots/dotGroup5/DotGroup5';
import HandDevice from './components/handDevice/HandDevice';
import Testimonials from './components/schoolTestimonials/SchoolTestimonials';
import useScreenSizes from '../../../../hooks/screenSizes/useScreenSizes';

interface Props {
  openContactModal: () => void;
}

const Hero: React.FC<Props> = ({ openContactModal }: Props) => {
  const {
    mobile,
    mobileLarge,
    tablet,
    tabletLarge,
    desktop,
    desktopLarge,
  } = useScreenSizes();
  const showDotGroup1 = desktop || desktopLarge;
  const showDotGroup2 = tabletLarge || desktop || desktopLarge;
  const showDotGroup3 = tablet;
  const showDotGroup4 = tabletLarge;
  const showDotGroup5 = mobile || mobileLarge;

  const { t } = useTranslation();
  const h3TextPart1 = t('Simple.');
  const h3TextPart2 = t('Effective. Accurate.');
  const h1Text = t('#1 Attendance Tracking Platform');
  const p = `Safer Management is a software company 
  that accurately tracks student attendance data 
  with the power of Artificial Intelligence and 
  Machine Learning.`;
  const actionText = t(`Request Free Demo`);

  return (
    <Container>
      <HandDevice />
      {showDotGroup1 && <DotGroup1 />}
      {showDotGroup2 && <DotGroup2 />}
      {showDotGroup3 && <DotGroup3 />}
      {showDotGroup4 && <DotGroup4 />}
      <Frame>
        <H3Container>
          <h3>{h3TextPart1} </h3>
          <h3>{h3TextPart2}</h3>
        </H3Container>
        <h1>{h1Text}</h1>
        <p>{p}</p>
        {showDotGroup5 && <DotGroup5 />}
        <MainActionButton onClick={openContactModal}>
          <ButtonText>{actionText}</ButtonText>
        </MainActionButton>
        <Testimonials />
      </Frame>
    </Container>
  );
};

export default Hero;
