import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, FailText, DisclaimerText, Span } from './FailScreenStyles';
import StopHand from './components/stop-hand/StopHand';

const failText = `Thank you for completing the daily 
COVID-19 Health Assessment. Based on your response 
to one or more of the questions, it has been determined 
that you should not report to campus today. You should 
also contact your immediate Supervisor and notify them 
of your status. You will be contacted by the COVID-19 
Coordinator before the end of the day with further 
guidance.`;
const span = 'Disclaimer';
const disclaimer = `The first day of 
absence will be deducted from personal leave and 
any additional days out of the office for this occurrence 
will be deducted from your accrued medical leave. If you 
do not have accrued personal and/or medical leave this 
absence(s) will be without pay.`;

const FailScreen: React.FC = () => {
  const { t } = useTranslation();
  const tFailText = t(failText);
  const tSpan = t(span);
  const tDisclaimer = t(disclaimer);
  return (
    <Container>
      <StopHand />
      <FailText>{tFailText}</FailText>
      <DisclaimerText>
        <Span>{`${tSpan}: `}</Span>
        {tDisclaimer}
      </DisclaimerText>
    </Container>
  );
};

export default FailScreen;
