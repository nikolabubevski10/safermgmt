import React from 'react';
import {
  Container,
  DesktopTriangleLeft,
  TriangleRight,
  MobileTriangleLeft,
} from './HealthScreeningStyles';
import triangleLeft from './assets/triangleLeft.png';
import triangleRight from './assets/triangleRight.png';
import mobileTriangleLeft from './assets/mobileTriangleLeft.png';
import DotGroup1 from './components/dot-group-1/DotGroup1';
import DotGroup2 from './components/dot-group-2/DotGroup2';
import DotGroup3 from './components/dot-group-3/DotGroup3';
import Introduction from './components/introduction/Introduction';
import Header from './components/header/Header';
import YesNoStep from './components/yes-no-step/YesNoStep';
import covidQuestionaire from './assets/covidQuestionaire';
import StepProgress from './components/step-progress/StepProgress';
const headerTitle = 'Daily Health Check';
import useQuestions from './hooks/useQuestions';
import FailScreen from './components/fail-screen/FailScreen';
import QrScreen from './components/qr-screen/QrScreen';
import getIsScreeningFailed from './hooks/utils/getIsScreeningFailed';

const HealthScreening: React.FC = () => {
  const {
    answers,
    questions,
    stepIndex,
    maxStepIndex,
    goToNextStep,
    setStepIndex,
    updateAnswer,
    onExplanationInputChange,
  } = useQuestions(covidQuestionaire);

  const isOnIntro = stepIndex === null;
  const isOnScreening = stepIndex !== null && stepIndex < questions.length;
  const isScreeningFailed = getIsScreeningFailed(answers, questions);
  const isOnQrScreen =
    stepIndex !== null &&
    stepIndex > questions.length - 1 &&
    !isScreeningFailed;
  const isOnFailScreen =
    stepIndex !== null && stepIndex > questions.length - 1 && isScreeningFailed;
  const showStepProgress = !isOnIntro || isOnQrScreen || isScreeningFailed;

  return (
    <Container>
      <DesktopTriangleLeft src={triangleLeft} />
      <TriangleRight src={triangleRight} />
      <MobileTriangleLeft src={mobileTriangleLeft} />
      <DotGroup1 />
      <DotGroup2 />
      <DotGroup3 />
      <Header title={headerTitle} />
      {isOnIntro && <Introduction onBeginClick={goToNextStep} />}
      {showStepProgress && (
        <StepProgress
          maxStepIndex={maxStepIndex}
          numberOfSteps={questions.length}
          currentStepIndex={stepIndex}
          setCurrentStepIndex={setStepIndex}
          answers={answers}
          questions={questions}
        />
      )}
      {isOnScreening && (
        <YesNoStep
          updateAnswer={updateAnswer}
          answers={answers}
          questions={questions}
          stepIndex={stepIndex}
          goToNextStep={goToNextStep}
          onExplanationInputChange={onExplanationInputChange}
        />
      )}
      {isOnQrScreen && <QrScreen />}
      {isOnFailScreen && <FailScreen />}
    </Container>
  );
};

export default HealthScreening;
