import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  AttendanceCard as Card,
  TotalSpanGreen,
  TotalSpanRed,
  IcoCheck,
  IcoTimes,
  TotalNumber,
  AttendanceInfo,
  CardContent,
  CardInfo,
  PresentList,
  ListWrap,
  List,
  AbsanceList,
} from './AttendanceCardStyle';

const AttendanceCard: React.FC = () => {
  const { t } = useTranslation();

  const tPresent = t('Total present');
  const tyearlyAvg = t('yearly avg');
  const tAbsent = t('Total absent');

  const totalStd = 2850;
  const chartNumbers = {
    absent: 0,
    yearlyPresent: 90,
    yearlyAbsance: 10,
  };
  return (
    <>
      <Card className={'active'} onClick={undefined}>
        <CardInfo>
          <TotalSpanGreen>
            <IcoCheck />
            <TotalNumber>{totalStd}</TotalNumber>
          </TotalSpanGreen>
          <AttendanceInfo>
            <CardContent>
              <span>{tPresent}</span>
            </CardContent>
            <span>
              {chartNumbers.yearlyPresent}% {tyearlyAvg}.
            </span>
          </AttendanceInfo>
        </CardInfo>

        <PresentList>
          <ListWrap>
            <List> Fri, May 18, 2021 </List>
            <List>Thu, May 17, 2021</List>
          </ListWrap>
        </PresentList>
      </Card>

      <Card className={'active'} onClick={undefined}>
        <CardInfo>
          <TotalSpanRed>
            <IcoTimes />
            <TotalNumber>{chartNumbers.absent}</TotalNumber>
          </TotalSpanRed>
          <AttendanceInfo>
            <CardContent>
              <span>{tAbsent}</span>
            </CardContent>
            <span>
              {chartNumbers.yearlyAbsance}% {tyearlyAvg}.
            </span>
          </AttendanceInfo>
        </CardInfo>

        <AbsanceList>
          <ListWrap>
            <List> Fri, May 18, 2021 </List>
            <List>Thu, May 17, 2021</List>
          </ListWrap>
        </AbsanceList>
      </Card>
    </>
  );
};

export default AttendanceCard;
