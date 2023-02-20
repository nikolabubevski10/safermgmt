import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import {
  scanFace,
  scanQr,
  failQR,
  failFaceScan,
} from '../../state/AttendanceActions';

import AttendanceCamera from './components/attendance-camera/AttendanceCamera';
import DotGroup1 from './components/dot-group-1/DotGroup1';
import DotGroup2 from './components/dot-group-2/DotGroup2';
import Notification from './components/notification/Notification';
import {
  Container,
  Heading,
  InstructionsContainer,
  Instructions,
  MostRecentPerson,
  NotificationContainer,
  SubHeaderContainer,
} from './AttendanceStyles';

interface Props {
  header: string;
  subHeader?: string;
  checkOut?: boolean;
}

const faceInstructions = `Place your face in front of the camera until the box turns green`;
const qrInstructions = `Please place QR code in front of the webcam until the box turns green`;

const Attendance: React.FC<Props> = ({
  header,
  subHeader,
  checkOut = false,
}: Props) => {
  const dispatch = useAppDispatch();

  const [shouldScanFaces, setShouldScanFaces] = useState(false);
  const [shouldScanQrCodes, setShouldScanQrCodes] = useState(false);
  const [valueIndex] = useState<0 | 1>(0);

  const isLoading = useAppSelector(({ attendance }) => attendance.isLoading);
  const isSuccessful = useAppSelector(
    ({ attendance }) => attendance.isSuccessful,
  );
  const mostRecentPerson = useAppSelector(
    ({ attendance }) => attendance.mostRecentPerson,
  );
  const notification = useAppSelector(
    ({ attendance }) => attendance.notification,
  );
  const checkedInPersons = useAppSelector(
    ({ attendance }) => attendance.checkedInPersons,
  );
  const shouldShowStatus = useAppSelector(
    ({ attendance }) => attendance.shouldShowStatus,
  );

  useEffect(() => {
    if (valueIndex === 0) {
      setShouldScanFaces(false);
      setShouldScanQrCodes(true);
    } else if (valueIndex === 1) {
      setShouldScanFaces(true);
      setShouldScanQrCodes(false);
    }
  }, [valueIndex]);

  const { t } = useTranslation();
  const tFaceInstructions = t(faceInstructions);
  const tQrInstructions = t(qrInstructions);

  // TODO: update Face Scan logic to accomodate check-out
  const handleFaceScan = useCallback(
    async (data: string) => {
      try {
        const value = JSON.parse(data);
        const userAccountId = value.id || '';
        const name = value.name || '';

        // TODO: make values dynamic
        dispatch(
          scanFace({
            eventDate: new Date().toISOString(),
            userAccountId,
            name,
            checkOut,
          }),
        );
      } catch {
        dispatch(failFaceScan);
      }
    },
    [checkedInPersons],
  );

  const handleQrScan = useCallback(
    async (data: string) => {
      try {
        const value = JSON.parse(data);
        const userAccountId = value.id || '';
        const name = value.name || '';
        const schoolId = value.schoolId || '';

        dispatch(
          scanQr({
            eventDate: new Date().toISOString(),
            userAccountId,
            name,
            checkOut,
            schoolId,
          }),
        );
      } catch {
        dispatch(failQR());
      }
    },
    [checkedInPersons],
  );

  const onFaceScan = (value: string) => handleFaceScan(value);
  const onQrCodeScan = (value: string) => handleQrScan(value);

  return (
    <Container>
      <Heading>{header}</Heading>

      {!!subHeader && (
        <SubHeaderContainer>
          <h3>{subHeader}</h3>
        </SubHeaderContainer>
      )}

      <InstructionsContainer>
        {shouldScanFaces && <Instructions>{tFaceInstructions}</Instructions>}
        {shouldScanQrCodes && <Instructions>{tQrInstructions}</Instructions>}
      </InstructionsContainer>

      {!!notification && (
        <NotificationContainer>
          <Notification type={notification.type}>
            {notification.text}
          </Notification>
        </NotificationContainer>
      )}

      <AttendanceCamera
        isScanInProgress={isLoading}
        isSuccessful={isSuccessful}
        onFaceScan={onFaceScan}
        onQrCodeScan={onQrCodeScan}
        shouldScanFaces={shouldScanFaces}
        shouldScanQrCodes={shouldScanQrCodes}
        shouldShowStatus={shouldShowStatus || false}
      />

      {mostRecentPerson && (
        <MostRecentPerson>{t(mostRecentPerson.name)}</MostRecentPerson>
      )}

      <DotGroup1 />
      <DotGroup2 />
    </Container>
  );
};

export default Attendance;
