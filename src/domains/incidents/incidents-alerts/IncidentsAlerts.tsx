import React, { useState } from 'react';
import {
  Container,
  HeadTitle,
  Title,
  PageContent,
  ContentTable,
  TableFieldsContainerHead,
  TableFieldsContainer,
  Field,
  FieldIcon,
  TableData,
  LastField,
  Question,
  FieldPointer,
  FieldSelect,
} from './IncidentsAlertsStyles';
import logo from './assets/icons/logo.svg';
import moment from 'moment';
import CustomPopup from './components/generic/CustomPopup';
import CustomModal from './components/generic/CustomModal';
import { useTranslation } from 'react-i18next';

const IncidentsAlerts: React.FC = () => {
  const [currentValue, setCurrentValue] = useState('F');
  const [modalUser, setModalUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  const title = t('Alerts');
  const name = t('Name');
  const date = t('Date/Time');
  const temprature = t('Temprature');
  const surveyText = t('Survey Questions');
  const email = t('Email');

  return (
    <Container>
      <HeadTitle>
        <Title>{title}</Title>
      </HeadTitle>

      <PageContent>
        <ContentTable>
          <TableFieldsContainerHead>
            <FieldPointer>
              {name}
              <FieldIcon>
                <i className="fas fa-arrow-up"></i>
              </FieldIcon>
            </FieldPointer>
            <FieldPointer>
              {date}
              <FieldIcon>
                <i className="fas fa-arrow-up"></i>
              </FieldIcon>
            </FieldPointer>
            <FieldSelect>
              <span>{temprature}</span>
              <CustomPopup
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
                selectvalues={['F', 'C']}
              />
            </FieldSelect>
            <Field>{surveyText}</Field>
            <Field>{email}</Field>
          </TableFieldsContainerHead>
          <TableData>
            {data.map((user) => (
              <TableFieldsContainer key={user.id}>
                <Field>
                  <span>
                    <img src={user.profilePhoto} alt="" />
                  </span>
                  {user.name}
                </Field>
                <Field>
                  {moment(user.date).format('MMMM Do, YYYY, h:mm a')}
                </Field>
                <Field>
                  {user.temprature}&deg; {currentValue === 'F' ? 'F' : 'C'}
                </Field>
                <Field>
                  <div>
                    {user.surveyQuestion.map((question, i) => (
                      <Question key={i}>
                        <FieldIcon>
                          <i className="fas fa-exclamation-circle"></i>
                        </FieldIcon>
                        {question}
                      </Question>
                    ))}
                  </div>
                </Field>
                <LastField
                  onClick={() => {
                    setModalUser(user);
                    setShowModal(true);
                  }}
                >
                  {email}
                </LastField>
              </TableFieldsContainer>
            ))}
          </TableData>
        </ContentTable>
      </PageContent>
      <CustomModal
        show={showModal}
        setShow={setShowModal}
        user={modalUser}
        title={email}
      />
    </Container>
  );
};

export default IncidentsAlerts;

const data = [
  {
    id: 1,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: [
      'Have you experienced fever or chills?',
      'Have you experienced fever or chills?',
      'Have you experienced fever or chills?',
    ],
    profilePhoto: logo,
  },
  {
    id: 2,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 3,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 4,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 5,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 6,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 7,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 8,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 9,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
  {
    id: 10,
    name: 'John Doe',
    date: new Date(),
    temprature: 99,
    surveyQuestion: ['Have you experienced fever or chills?'],
    profilePhoto: logo,
  },
];
