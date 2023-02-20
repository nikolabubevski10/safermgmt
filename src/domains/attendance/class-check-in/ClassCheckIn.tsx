import React, { Fragment, useEffect, useState } from 'react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { ICourse } from '../state/types';
import { logout, setIsReauthenticated } from '../../auth/AuthActions';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { useBeforeunload } from 'react-beforeunload';
import { useTranslation } from 'react-i18next';
import Attendance from '../shared/attendance/Attendance';
import circle from '../shared/assets/circle.png';
import ClassSelection from './components/class-selection/ClassSelection';
import DotGroup1 from './components/dot-group-1/DotGroup1';
import ExitModal from '../shared/exit-modal/ExitModal';
import getDummyTeacher from './utils/getDummyTeacher';
import Header from '../shared/header/Header';
import { CircleImg, DotGroupContainer } from '../shared/SharedStyles';
import {
  Container,
  Heading,
  InnerContainer,
  Subheading,
} from './ClassCheckInStyles';

const helloText = 'Hello';
const subheadingText = 'Please select your class period';
const subHeader = 'Check In';

const AttendanceComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const teacher = getDummyTeacher(Math.floor(Math.random() * 10 + 1));

  const isReauthenticated = useAppSelector(
    ({ auth }) => auth.isReauthenticated,
  );

  const [course, setCourse] = useState<ICourse | null>(null);
  const [exitModal, setExitModal] = useState<Element | null>(null);
  const [shouldShowExitModal, setShouldShowExitModal] = useState<boolean>(
    false,
  );

  useBeforeunload(() => {
    !isReauthenticated && dispatch(logout());
  });

  useEffect(() => {
    setExitModal(document.querySelector('#exit-modal'));
    dispatch(setIsReauthenticated(false));

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const closeExitModal = () => {
    setShouldShowExitModal(false);
    exitModal && enableBodyScroll(exitModal);
  };

  const openExitModal = () => {
    setShouldShowExitModal(true);
    exitModal && disableBodyScroll(exitModal);
  };

  const selectClass = (course: ICourse | null) => {
    setCourse(course);
  };

  const tHello = t(helloText);
  const greeting = `${tHello}, ${teacher.name}`;
  const tSubheadingText = t(subheadingText);
  const tSubHeader = t(subHeader);

  return (
    <Container>
      <ExitModal onClose={closeExitModal} shouldShow={shouldShowExitModal} />

      <Header showTime openExitModal={openExitModal} />

      {course ? (
        <Attendance header={course.name} subHeader={tSubHeader} />
      ) : (
        <Fragment>
          <InnerContainer>
            <Heading>{greeting}</Heading>

            <Subheading>{tSubheadingText}</Subheading>

            <ClassSelection
              isReauthenticated={isReauthenticated}
              courses={teacher.courses}
              handleClassSelection={selectClass}
            />
          </InnerContainer>

          <CircleImg src={circle} />

          <DotGroupContainer>
            <DotGroup1 />
          </DotGroupContainer>
        </Fragment>
      )}
    </Container>
  );
};

export default AttendanceComponent;
