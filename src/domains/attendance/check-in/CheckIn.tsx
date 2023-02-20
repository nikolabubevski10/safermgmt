import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { logout, setIsReauthenticated } from '../../auth/AuthActions';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { useBeforeunload } from 'react-beforeunload';
import Attendance from '../shared/attendance/Attendance';
import ExitModal from '../shared/exit-modal/ExitModal';
import Header from '../shared/header/Header';
import { Container } from './CheckInStyles';

const header = 'Check In';

const AttendanceComponent: React.FC = () => {
  const { t } = useTranslation();
  const tHeader = t(header);

  const dispatch = useAppDispatch();

  const isReauthenticated = useAppSelector(
    ({ auth }) => auth.isReauthenticated,
  );

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

  return (
    <Container>
      <ExitModal onClose={closeExitModal} shouldShow={shouldShowExitModal} />
      <Header showTime openExitModal={openExitModal} />
      <Attendance header={tHeader} />
    </Container>
  );
};

export default AttendanceComponent;
