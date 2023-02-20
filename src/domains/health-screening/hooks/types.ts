import React from 'react';

export interface IQuestion {
  text: string;
  subtext?: string;
  explainYes?: boolean;
  explainNo?: boolean;
  failAnswers: boolean[];
}

export interface IAnswer {
  value: boolean | null;
  yesExplanation?: string;
  noExplanation?: string;
}

export interface IUpdateExplanation {
  explaination: string;
  isNoExplanation?: boolean;
  isYesExplanation?: boolean;
  stepIndex: number | null;
}

export interface IOnExplanationInputChange {
  e: React.ChangeEvent<HTMLInputElement>;
  isNoExplanation?: boolean;
  isYesExplanation?: boolean;
  stepIndex: number | null;
}

export type TUpdateAnswer = (stepIndex: number | null, answer: boolean) => void;
export type TUpdateExplanation = ({
  explaination,
  isNoExplanation,
  isYesExplanation,
  stepIndex,
}: IUpdateExplanation) => void;
export type TOnExplanationInputChange = ({
  e,
  isNoExplanation,
  isYesExplanation,
  stepIndex,
}: IOnExplanationInputChange) => void;

export interface IUseQuestions {
  answers: IAnswer[];
  goToNextStep: () => void;
  onExplanationInputChange: TOnExplanationInputChange;
  stepIndex: number | null;
  updateAnswer: TUpdateAnswer;
  updateExplanation: TUpdateExplanation;
  questions: IQuestion[];
  setStepIndex: React.Dispatch<React.SetStateAction<number | null>>;
  maxStepIndex: number | null;
}
