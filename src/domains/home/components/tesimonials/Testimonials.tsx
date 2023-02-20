import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../../../hooks/screenSizes/useScreenSizes';
import {
  ArrowButtonContainer,
  Container,
  Inner,
  LeftDotsContainer,
  RightDotsContainer,
  SchoolText,
  SpotlightAvatar,
} from './TestimonialsStyle';
import { MainActionButton, ButtonText } from '../shared/sharedStyles';
import ArrowButton from './components/arrowButton/ArrowButton';
import Avatars from './components/avatars/Avatars';
import DotGroup1 from './components/dots/dotGroup1/DotGroup1';
import DotGroup2 from './components/dots/dotGroup2/DotGroup2';
import DotGroup3 from './components/dots/dotGroup3/DotGroup3';
import testimonials from './assets/testimonials';

const headerText = 'Hear From Our Happy Customers';

const actionButtonText = 'Request Free Demo';

interface Props {
  openContactModal: () => void;
}

const Testimonials: React.FC<Props> = ({ openContactModal }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const { mobile, mobileLarge } = useScreenSizes();
  const showDotGroup3 = mobile || mobileLarge;
  const testimonial = testimonials[currentIndex] || {};
  const testText = testimonial.text || '';
  const name = testimonial.name || '';
  const school = testimonial.school || '';
  const avatarSrc = testimonial.avatar || '';
  const lastIndex = testimonials.length - 1;

  const stepLeft = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return lastIndex;
      return (prev -= 1);
    });
  };

  const stepRight = () => {
    setCurrentIndex((prev) => {
      if (prev === lastIndex) return 0;
      return (prev += 1);
    });
  };

  const { t } = useTranslation();

  const tActionButtonText = t(actionButtonText);
  const tHeaderText = t(headerText);
  const tTestText = t(testText);

  return (
    <Container>
      <LeftDotsContainer>
        <DotGroup1 />
      </LeftDotsContainer>
      <RightDotsContainer>
        {!showDotGroup3 && <DotGroup2 />}
        {showDotGroup3 && <DotGroup3 />}
      </RightDotsContainer>
      <Inner>
        <h2>{tHeaderText}</h2>
        <Avatars />
        <SpotlightAvatar src={avatarSrc} />
        <h3>{name}</h3>
        <p>{tTestText}</p>
        <SchoolText>{school}</SchoolText>
        <ArrowButtonContainer>
          <ArrowButton left onClick={stepLeft} />
          <ArrowButton right onClick={stepRight} />
        </ArrowButtonContainer>
        <MainActionButton onClick={openContactModal}>
          <ButtonText>{tActionButtonText}</ButtonText>
        </MainActionButton>
      </Inner>
    </Container>
  );
};

export default Testimonials;
