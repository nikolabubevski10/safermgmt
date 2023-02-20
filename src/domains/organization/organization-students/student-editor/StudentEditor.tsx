import React, { useEffect } from 'react';
import { Container } from './StudentEditorStyles';
import { PATHS } from '../../../../globals';
import { Prompt, useHistory, useParams, useLocation } from 'react-router-dom';
import {
  setShowSaveModal,
  setShowSaveErrorModal,
} from '../state/OrgStudentsActions';
import { IFormValues } from '../types';
import { launchStudent, launchNewStudent } from '../state/OrgStudentsActions';
import { useAppSelector, useAppDispatch } from '../../../../state/hooks';
import { useForm, Resolver } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import ConfirmDenyModal from '../shared/confirm-deny-modal/ConfirmDenyModal';
import Contacts from './components/contacts/Contacts';
import EditorSchema from './schemas/EditorSchema';
import emptyForm from './assets/emptyForm';
import fieldNames from './assets/fieldNames';
import Info from './components/info/Info';
import Menu from './components/menu/Menu';
import SimpleModal from '../shared/simple-modal/SimpleModal';
import Spinner from '../shared/spinner/Spinner';
import StudentHeader from './components/student-header/StudentHeader';
import TopBar from './components/top-bar/TopBar';
import views from '../state/assets/views';

const promptMessage =
  'You have unsaved changes, are you sure you want to leave?';
const saveErrorPrompt = 'There was a problem saving your survey.';
const savePrompt = 'Do you want to save your changes?';

const StudentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const resolver: Resolver<IFormValues> = yupResolver(EditorSchema);

  const {
    currentStudentId,
    isCreatingNewStudent,
    isLoading,
    showExitPrompt,
    showSaveErrorModal,
    showSaveModal,
    students,
    view,
  } = useAppSelector(({ orgStudents }) => orgStudents);

  const { t } = useTranslation();
  const tPromptMessage = t(promptMessage);
  const tSaveErrorPrompt = t(saveErrorPrompt);
  const tSavePrompt = t(savePrompt);

  const isInInfoView = view === views.info;
  const isInContactsView = view === views.contacts;
  const currentStudent =
    currentStudentId !== null &&
    students.find((s) => s.id === currentStudentId);

  const { register, watch, getValues, reset } = useForm({
    resolver,
  });

  const {
    FIRST_NAME,
    MIDDLE_NAME,
    LAST_NAME,
    GENDER,
    ENROLLMENT_STATUS,
  } = fieldNames;
  watch([FIRST_NAME, MIDDLE_NAME, LAST_NAME, GENDER, ENROLLMENT_STATUS]);
  const formValues = getValues();

  const closeSaveErrorModal = () => dispatch(setShowSaveErrorModal(false));
  const closeSaveModal = () => dispatch(setShowSaveModal(false));
  const confirmSaveModal = () => dispatch(setShowSaveModal(false));
  const goBackToStudentList = () => history.push(PATHS.orgStudentsAll);

  useEffect(() => {
    if (!isCreatingNewStudent && id) {
      dispatch(launchStudent({ id: parseInt(id), schoolId: 74 }));
    } else if (location.pathname === PATHS.orgStudentsNew) {
      dispatch(launchNewStudent({ schoolId: 74 }));
    }
  }, []);

  useEffect(() => {
    reset({
      ...emptyForm,
      ...{
        dateOfBirth:
          currentStudent && currentStudent.dateOfBirth
            ? currentStudent.dateOfBirth
            : null,
        email:
          currentStudent && currentStudent.emailAddress.length > 0
            ? currentStudent.emailAddress[0].emailAddress
            : '',
        enrollmentStatus: currentStudent && currentStudent.currentlyEnrolled,
        firstName: currentStudent ? currentStudent.firstName : '',
        gender: currentStudent ? currentStudent.gender : '',
        grade: currentStudent ? currentStudent.adaGrade : '',
        lastName: currentStudent ? currentStudent.lastName : '',
        middleName: currentStudent ? currentStudent.middleName : '',
        // TODO: once API is updated, connect notes property (7-28-21)
        notes: '',
        phoneNumber:
          currentStudent && currentStudent.phoneNumber.length > 0
            ? currentStudent.phoneNumber[0].phoneNumber
            : '',
        race: currentStudent ? currentStudent.race : '',
        studentId: currentStudent ? String(currentStudent.id) : '',
      },
    });
  }, [reset, currentStudentId]);

  return (
    <Container>
      <Prompt when={showExitPrompt} message={tPromptMessage} />
      <ConfirmDenyModal
        closeModal={closeSaveModal}
        isLoading={isLoading}
        onConfirm={confirmSaveModal}
        onDeny={goBackToStudentList}
        prompt={tSavePrompt}
        shouldShow={showSaveModal}
      />
      <SimpleModal
        closeModal={closeSaveErrorModal}
        onConfirm={closeSaveErrorModal}
        prompt={tSaveErrorPrompt}
        shouldShow={showSaveErrorModal}
      />
      <TopBar />
      <Menu />
      {!isLoading && <StudentHeader formValues={formValues} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {isInInfoView && (
            <Info
              gender={formValues.gender}
              enrollmentStatus={formValues.enrollmentStatus}
              register={register}
            />
          )}
          {isInContactsView && <Contacts register={register} />}
        </>
      )}
    </Container>
  );
};

export default StudentDetails;
