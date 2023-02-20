import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './NavPanelStyles';
import AttendanceIcon from './components/icons/attendance/AttendanceIcon';
import IdCardsIcon from './components/icons/idCards/IdCardsIcon';
import IncidentsIcon from './components/icons/incidents/IncidentsIcon';
import labels from './assets/labels';
import NavSubLink from './components/nav-sub-link/NavSubLink';
import NavLink from './components/nav-link/NavLink';
import OrganizationIcon from './components/icons/organization/OrganizationIcon';
import SchoolBusIcon from './components/icons/schoolBus/SchoolBusIcon';
import SmsIcon from './components/icons/sms/SmsIcon';
import SurveysIcon from './components/icons/surveys/SurveysIcon';
import { PATHS } from '../../../../globals';
import AuthRolesProvider from '../../../auth/auth-role-provider/AuthRoleProvider';
import authRoles from '../../../auth/auth-role-provider/assets/authRoles';

interface Props {
  logoMenuIsOpen: boolean;
}

const NavPanel: React.FC<Props> = ({ logoMenuIsOpen }: Props) => {
  const [currentPage, setCurrentPage] = useState(labels.attendance);
  const { t } = useTranslation();
  const tAllSurveys = t(labels.surveysAll);
  const tAttendance = t(labels.attendance);
  const tAttendanceDashboard = t(labels.attendanceDashboard);
  const tAttendanceReports = t(labels.attendanceReports);
  const tAttendanceVisitors = t(labels.attendanceVisitors);
  const tCheckIn = t(labels.checkIn);
  const tCheckOut = t(labels.checkOut);
  const tIdCards = t(labels.idCards);
  const tIncidents = t(labels.incidents);
  const tIncidentsAlerts = t(labels.incidentsAlerts);
  const tIncidentsHealthCases = t(labels.incidentsHealthCases);
  const tIncidentsReportingTool = t(labels.incidentsReportingTool);
  const tIncidentsReports = t(labels.incidentsReports);
  const tOrganization = t(labels.organization);
  const tOrganizationBadge = t(labels.organizationBadge);
  const tOrganizationParents = t(labels.organizationParents);
  const tOrganizationProfileCompletion = t(
    labels.organizationProfileCompletion,
  );
  const tOrganizationQr = t(labels.organizationQr);
  const tOrganizationStaff = t(labels.organizationStaff);
  const tOrganizationStudents = t(labels.organizationStudents);
  const tOrganizationUsers = t(labels.organizationUsers);
  const tSchoolBus = t(labels.schoolBus);
  const tSchoolBusAttendance = t(labels.schoolBusAttendance);
  const tSchoolBusRouteTracker = t(labels.schoolBusRouteTracker);
  const tSms = t(labels.sms);
  const tSurveyReports = t(labels.surveysReports);
  const tSurveys = t(labels.surveys);
  return (
    <Container isOnTop={!logoMenuIsOpen}>
      <NavLink
        label={tAttendance}
        iconComponent={AttendanceIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
        <AuthRolesProvider allowedRoles={authRoles.attendanceDashboard}>
          <NavSubLink to={PATHS.attendanceDashboard}>
            {tAttendanceDashboard}
          </NavSubLink>
        </AuthRolesProvider>

        <NavSubLink to={PATHS.attendanceReports}>
          {tAttendanceReports}
        </NavSubLink>

        <AuthRolesProvider allowedRoles={authRoles.visitors}>
          <NavSubLink to={PATHS.attendanceVisitors}>
            {tAttendanceVisitors}
          </NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.qRAndFaceScanning}>
          <NavSubLink to={PATHS.checkOut}>{tCheckOut}</NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.qRAndFaceScanning}>
          <NavSubLink to={PATHS.checkIn}>{tCheckIn}</NavSubLink>
        </AuthRolesProvider>
      </NavLink>

      <NavLink
        label={tIncidents}
        iconComponent={IncidentsIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
        <NavSubLink to={PATHS.incidentsHealthCases}>
          {tIncidentsHealthCases}
        </NavSubLink>
        <NavSubLink to={PATHS.incidentsReportingTool}>
          {tIncidentsReportingTool}
        </NavSubLink>
        <NavSubLink to={PATHS.incidentsReports}>{tIncidentsReports}</NavSubLink>
        <NavSubLink to={PATHS.incidentsAlerts}>{tIncidentsAlerts}</NavSubLink>
      </NavLink>

      <NavLink
        label={tSurveys}
        iconComponent={SurveysIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
        <AuthRolesProvider allowedRoles={authRoles.surveySettings}>
          <NavSubLink to={PATHS.surveysAll}>{tAllSurveys}</NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.surveySettings}>
          <NavSubLink to={PATHS.surveysReports}>{tSurveyReports}</NavSubLink>
        </AuthRolesProvider>
      </NavLink>

      <NavLink
        to={PATHS.sms}
        label={tSms}
        iconComponent={SmsIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <NavLink
        to={PATHS.idCards}
        label={tIdCards}
        iconComponent={IdCardsIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <NavLink
        label={tSchoolBus}
        iconComponent={SchoolBusIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
        <AuthRolesProvider allowedRoles={authRoles.schoolBusAttendance}>
          <NavSubLink to={PATHS.schoolBusAttendance}>
            {tSchoolBusAttendance}
          </NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.schoolBusRouteTracker}>
          <NavSubLink to={PATHS.schoolBusRouteTracker}>
            {tSchoolBusRouteTracker}
          </NavSubLink>
        </AuthRolesProvider>
      </NavLink>

      <NavLink
        label={tOrganization}
        iconComponent={OrganizationIcon}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
        <NavSubLink to={PATHS.organizationBadge}>
          {tOrganizationBadge}
        </NavSubLink>

        <NavSubLink to={PATHS.organizationParents}>
          {tOrganizationParents}
        </NavSubLink>

        <NavSubLink to={PATHS.organizationProfileCompletion}>
          {tOrganizationProfileCompletion}
        </NavSubLink>

        <AuthRolesProvider allowedRoles={authRoles.qrGenerator}>
          <NavSubLink to={PATHS.organizationQr}>{tOrganizationQr}</NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.staffList}>
          <NavSubLink to={PATHS.organizationStaff}>
            {tOrganizationStaff}
          </NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.studentList}>
          <NavSubLink to={PATHS.orgStudentsAll}>
            {tOrganizationStudents}
          </NavSubLink>
        </AuthRolesProvider>

        <AuthRolesProvider allowedRoles={authRoles.userList}>
          <NavSubLink to={PATHS.organizationUsers}>
            {tOrganizationUsers}
          </NavSubLink>
        </AuthRolesProvider>
      </NavLink>
    </Container>
  );
};

export default NavPanel;
