import React, { useState } from 'react';
import { Container, Elipse } from './ProfileSetupStyles';
import DotGroup1 from './components/dot-group-1/DotGroup1';
import elipse from './assets/elipse.png';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';
import Step3 from './components/step3/Step3';
import StepProgress from './components/step-progress/StepProgress';
import Success from './components/success/Success';
import useCamera from '../../domains/camera/hooks/useCamera';
import useForm from '../../hooks/useForm';
import yupPhoneNumberFormSchema from './schemas/yupPhoneNumberFormSchema';

const NUMBER_OF_STEPS = 3;

const ProfileSetup: React.FC = () => {
  const fakeName = `User Name`;
  const { form, handleInputChange, isValidForm } = useForm(
    yupPhoneNumberFormSchema,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [hasBegun, setHasBegun] = useState<boolean>(false);
  const goToNextStep = () => setStepIndex((prev) => prev + 1);
  const isStep1 = hasBegun && stepIndex === 0;
  const isStep2 = hasBegun && stepIndex === 1;
  const isStep3 = hasBegun && stepIndex === 2;
  const isSuccess = stepIndex > 2;
  const {
    isCameraOn,
    isLoading,
    photo,
    retakePhoto,
    takePhoto,
    turnOnCamera,
    webcamRef,
  } = useCamera();
  return (
    <Container>
      <DotGroup1 />
      <Elipse src={elipse} />
      <Header />
      {hasBegun && (
        <StepProgress
          currentStepIndex={stepIndex}
          numberOfSteps={NUMBER_OF_STEPS}
        />
      )}
      {!hasBegun && <Intro setHasBegun={setHasBegun} name={fakeName} />}
      {isStep1 && (
        <Step1
          goToNextStep={goToNextStep}
          isCameraOn={isCameraOn}
          isLoading={isLoading}
          photo={photo}
          retakePhoto={retakePhoto}
          takePhoto={takePhoto}
          turnOnCamera={turnOnCamera}
          webcamRef={webcamRef}
        />
      )}
      {isStep2 && (
        <Step2
          form={form}
          goToNextStep={goToNextStep}
          handleInputChange={handleInputChange}
        />
      )}
      {isStep3 && (
        <Step3
          form={form}
          goToNextStep={goToNextStep}
          handleInputChange={handleInputChange}
          isValidForm={isValidForm}
        />
      )}
      {isSuccess && <Success />}
    </Container>
  );
};

export default ProfileSetup;
