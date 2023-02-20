import React from 'react';
import {
  Container,
  StyledImg,
  TextContainer,
  TestimonialText,
  SubTestimonialText,
} from './SchoolTestimonialStyles';

interface Props {
  src: string;
  schoolName: string;
  schoolType: string;
}

const SchoolTestimonial: React.FC<Props> = ({
  src,
  schoolName,
  schoolType,
}: Props) => {
  return (
    <Container>
      <StyledImg src={src} />
      <TextContainer>
        <TestimonialText>{schoolName}</TestimonialText>
        <SubTestimonialText>{schoolType}</SubTestimonialText>
      </TextContainer>
    </Container>
  );
};

export default SchoolTestimonial;
