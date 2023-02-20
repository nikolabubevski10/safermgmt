import React, { useState } from 'react';
import moment from 'moment';
import mail from '../../assets/icons/mail.png';
import { useTranslation } from 'react-i18next';

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  QuestionsContainer,
  UserInfo,
  EmailForm,
  FormLeft,
  FormRight,
  SendButton,
  QuestionTop,
  Qheader,
  UserName,
  FormField,
  MessageHeader,
  MessageBody,
  ButtonContainer,
} from './ModalStyles';
import CustomButton from '../common/CustomButton';
interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  // eslint-disable-next-line
  user: any;
  title: string;
}

const CustomModal: React.FC<Props> = (props: Props) => {
  const { show, user, setShow, title } = props;
  const [isSent, setIssent] = useState(false);

  const { t } = useTranslation();
  const messageSentText = t('Message Sent');
  const demoEmail = t('travis_toliver@gmail');
  const messageInfoText = t('will receive your message');
  const surveyText = t('Survey Questions');
  const demoUniversityName = t('Safer University');
  const fromText = t('From');
  const toText = t('To');
  const messageText = t('Message');
  const userNameText = t(`${user.name}`);

  const handleSubmit = () => {
    setIssent(true);
  };

  const handleButtonClick = () => {
    setIssent(false);
    setShow(false);
  };
  return (
    <>
      {show ? (
        <ModalWrapper>
          <ModalContent>
            {isSent ? (
              <div>
                <MessageHeader>
                  <i
                    onClick={() => {
                      setIssent(false);
                      setShow(false);
                    }}
                    className="fas fa-times"
                  ></i>
                </MessageHeader>
                <MessageBody>
                  <img src={mail} alt="mail-icon" />
                  <h1>{messageSentText}</h1>
                  <p>{demoEmail}</p>
                  <p>{messageInfoText}</p>
                </MessageBody>
                <ButtonContainer>
                  <CustomButton
                    onClickHandle={handleButtonClick}
                    title="Close"
                  ></CustomButton>
                </ButtonContainer>
              </div>
            ) : (
              <>
                <ModalHeader>
                  <h1>{title}</h1>
                  <i
                    onClick={() => setShow(false)}
                    className="fas fa-times"
                  ></i>
                </ModalHeader>
                <QuestionsContainer>
                  <QuestionTop>
                    <Qheader>
                      <i className="fas fa-exclamation-circle"></i>
                      <h2>{surveyText}</h2>
                    </Qheader>
                    <span>
                      {moment(user.date).format('MMMM Do, YYYY, h:mm a')}
                    </span>
                  </QuestionTop>
                  <ul>
                    {user.surveyQuestion.map((question: string, i: number) => (
                      <p key={i}>{question}</p>
                    ))}
                  </ul>
                </QuestionsContainer>
                <UserInfo>
                  <img src={user.profilePhoto} alt="profile" />
                  <UserName>
                    <h3>{userNameText}</h3>
                    <h3>{demoUniversityName}</h3>
                  </UserName>
                </UserInfo>
                <form onSubmit={handleSubmit}>
                  <EmailForm>
                    <FormLeft>
                      <FormField>
                        <label>{fromText}</label>
                        <input type="text" />
                      </FormField>
                      <FormField>
                        <label>{toText}</label>
                        <input type="text" />
                      </FormField>
                    </FormLeft>
                    <FormRight>
                      <label>{messageText}</label>
                      <textarea></textarea>
                    </FormRight>
                  </EmailForm>
                  <SendButton>
                    <CustomButton
                      title="Send message"
                      buttonType="submit"
                    ></CustomButton>
                  </SendButton>
                </form>
              </>
            )}
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default CustomModal;
