import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackgroundImg,
  Container,
  DotGroupContainer,
  ReportsImg,
  ImgContainer,
  Checklist,
  ChecklistItemColumn,
  Frame,
} from './ReportsStyles';
import ChecklistItem from './components/checklistItem/ChecklistItem';
import reports from './assets/reports.png';
import bg from './assets/bg.png';
import DotGroup1 from './components/dotGroup1/DotGroup1';

const headerText = 'Reporting and Analytics';

const p1 = `The Safer Management online platform 
gives your organization the ability to generate 
reports on all data collected. The real-time 
analytics tracker provides instant updates to 
key stakeholders of your organization.`;

const p2 = `Custom date ranges and person-type 
can filter reports. The Safer Management Mobile 
Platform provides key analytics with our mobile 
dashboard feature. Reporting ability includes, 
but are is not limited to the following functions`;

const item1Text = 'Daily Attendance';
const item2Text = 'Absentee Reports';
const item3Text = 'Survey Participation Reports';
const item4Text = 'Medical Alerts';
const subheadingText = `Reporting ability includes, 
but are is not limited to the following functions`;

const Reports: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tp1 = t(p1);
  const tp2 = t(p2);
  const tItem1Text = t(item1Text);
  const tItem2Text = t(item2Text);
  const tItem3Text = t(item3Text);
  const tItem4Text = t(item4Text);
  const tSubheadingText = t(subheadingText);

  return (
    <Container>
      <Frame>
        <h2>{tHeaderText}</h2>
        <p>{tp1}</p>
        <p>{tp2}:</p>
      </Frame>
      <ImgContainer>
        <BackgroundImg src={bg} />
      </ImgContainer>
      <ReportsImg src={reports} />
      <DotGroupContainer>
        <DotGroup1 />
      </DotGroupContainer>
      <Frame>
        <h3>{tSubheadingText}:</h3>
        <Checklist>
          <ChecklistItemColumn>
            <ChecklistItem itemText={tItem1Text} />
            <ChecklistItem itemText={tItem2Text} />
          </ChecklistItemColumn>
          <ChecklistItemColumn>
            <ChecklistItem itemText={tItem3Text} />
            <ChecklistItem itemText={tItem4Text} />
          </ChecklistItemColumn>
        </Checklist>
      </Frame>
    </Container>
  );
};

export default Reports;
