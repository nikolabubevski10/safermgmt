import React from 'react';
import {
  Container,
  QuestionContainer,
  QuestionText,
  Avatar,
  Inner,
} from './CardStyles';
import { UncheckedBox, CheckedBox } from './components/Checkboxes';

export interface Props {
  avatarSrc: string;
  questionList: {
    question: string;
    checked: boolean;
  }[];
  title: string;
}

interface Question {
  question: string;
  checked: boolean;
}

const Card: React.FC<Props> = ({ avatarSrc, questionList, title }: Props) => {
  return (
    <Container>
      <Avatar src={avatarSrc} />
      <h4>{title}</h4>
      <Inner>
        {questionList.map((question: Question, i: number) => (
          <QuestionContainer key={i}>
            {question.checked ? <CheckedBox /> : <UncheckedBox />}
            <QuestionText>{question.question}</QuestionText>
          </QuestionContainer>
        ))}
      </Inner>
    </Container>
  );
};

export default Card;
