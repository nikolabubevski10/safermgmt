import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  InnerContainer,
  Text,
  BottomText,
} from './SchoolTestimonialsStyle';
import SchoolTestimonial from '../../../shared/schoolTestimonial/SchoolTestimonial';
import callaway from './assets/callaway.png';
import foresthill from './assets/foresthill.png';
import powell from './assets/powell.png';
import boyd from './assets/boyd.png';

const bottomText = '+ many other Schools Districts & Universities';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const tBottomText = t(bottomText);
  return (
    <Container>
      <Text>Trusted By</Text>
      <InnerContainer>
        <SchoolTestimonial
          src={callaway}
          schoolName={'Callaway'}
          schoolType={'High School'}
        />
        <SchoolTestimonial
          src={foresthill}
          schoolName={'Forest Hill'}
          schoolType={'High School'}
        />
      </InnerContainer>
      <InnerContainer>
        <SchoolTestimonial
          src={powell}
          schoolName={'Powell'}
          schoolType={'Middle School'}
        />
        <SchoolTestimonial
          src={boyd}
          schoolName={'Boyd'}
          schoolType={'Elementary School'}
        />
      </InnerContainer>
      <BottomText>{tBottomText}</BottomText>
    </Container>
  );
};

export default Testimonials;
