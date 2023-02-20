import React from 'react';
import {
  Container,
  Wrap,
  ProfileImage,
  Image,
  ProfileInfo,
  Name,
  SchoolName,
  Grade,
  GradeWrap,
  Enrolled,
  NotEnrolled,
  IcoCheck,
  IcoTimes,
  InputGroup,
  GroupInner1,
  GroupInner2,
} from './InfoStyle';
import stdimg from '../../assets/stdimg.png';
import Input from './components/input/Input';
import NotesTextBox from './components/notes-text-box/NotesTextBox';
import fieldLabels from './assets/fieldLabels';
import fieldNames from './assets/fieldNames';

const Info: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <ProfileImage>
          <Image src={stdimg} />
        </ProfileImage>
        <ProfileInfo>
          <Name> {'Student Name'} </Name>
          <SchoolName>{'Gentry High School'}</SchoolName>
          <GradeWrap>
            <Grade>Grade: {'10'}</Grade>
            {true && (
              <Enrolled>
                <IcoCheck />
                Enrolled
              </Enrolled>
            )}
            {false && (
              <NotEnrolled>
                <IcoTimes />
                No-Enrolled
              </NotEnrolled>
            )}
          </GradeWrap>
        </ProfileInfo>
      </Wrap>

      <InputGroup>
        <Input
          isDisabled
          label={fieldLabels.studentId}
          name={fieldNames.FIRST_NAME}
        />
        <Input
          isDisabled
          label={fieldLabels.dateOfBirth}
          name={fieldNames.MIDDLE_NAME}
        />
        <Input
          isDisabled
          label={fieldLabels.classification}
          name={fieldNames.LAST_NAME}
        />
      </InputGroup>
      <InputGroup>
        <GroupInner1>
          <GroupInner2>
            <Input
              isDisabled
              label={fieldLabels.grade}
              name={fieldNames.GRADE}
            />
            <Input isDisabled label={fieldLabels.race} name={fieldNames.RACE} />
          </GroupInner2>
          <GroupInner2>
            <Input
              isDisabled
              label={fieldLabels.email}
              name={fieldNames.EMAIL}
            />
            <Input
              isDisabled
              label={fieldLabels.phoneNumber}
              name={fieldNames.PHONE_NUMBER}
            />
          </GroupInner2>
        </GroupInner1>
        <NotesTextBox isDisabled isHighlighted={false} isValid={true} />
      </InputGroup>
    </Container>
  );
};

export default Info;
