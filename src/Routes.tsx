import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { PATHS } from './globals';
import { useAppSelector } from './state/hooks';
import CheckOut from './domains/attendance/check-out/CheckOut';
import CheckIn from './domains/attendance/check-in/CheckIn';
import AttendanceDashboard from './domains/attendance-dashboard/AttendanceDashboard';
import AttendanceReports from './domains/attendanceReports/AttendanceReports';
import AttendanceVisitors from './domains/attendanceVisitors/AttendanceVisitors';
import BusAttendance from './domains/schoolBus/bus-attendance/BusAttendance';
import ForgotPassword from './domains/auth/forgot-password/ForgotPassword';
import HealthScreening from './domains/health-screening/HealthScreening';
import Home from './domains/home/Home';
import IdCards from './domains/idCards/IdCards';
import IncidentReports from './domains/incidents/incident-reports/IncidentReports';
import IncidentsAlerts from './domains/incidents/incidents-alerts/IncidentsAlerts';
import IncidentsHealthCases from './domains/incidents/incidents-health-cases/IncidentsHealthCases';
import IncidentsReportingTool from './domains/incidents/incidents-reporting-tool/IncidentsReportingTool';
import Login from './domains/auth/login/Login';
import Navigation from './domains/navigation/Navigation';
import OrganizationBadgeRequest from './domains/organization/organization-badge-request/OrganizationBadgeRequest';
import OrganizationParents from './domains/organization/organization-parents/OrganizationParents';
import OrganizationStaff from './domains/organization/organization-employees/OrganiztionEmployees';
import OrganizationStaffEdit from './domains/organization/organization-employees/components/EmployeeEditor/EmployeeEditor';
import StudentSelection from './domains/organization/organization-students/student-selection/StudentSelection';
import StudentEditor from './domains/organization/organization-students/student-editor/StudentEditor';
import OrganizationUsers from './domains/organization/organization-users/OrganizationUsers';
import OrganizationUsersEdit from './domains/organization/organization-users/components/UserEditor/UserEditor';
import OrganizationUsersNew from './domains/organization/organization-users/components/UserEditor/UserNew';
import OrgProfileCompletion from './domains/organization/organization-profile-completion/OrgProfileCompletion';
import PrivacyPolicy from './domains/home/components/privacyPolicy/PrivacyPolicy';
import ProfileSetup from './domains/profile-setup/ProfileSetup';
import QrGenerator from './domains/qr/generator/Generator';
import RouteTracker from './domains/schoolBus/route-tracker/RouteTracker';
import Sms from './domains/sms/Sms';
import SurveyReports from './domains/surveys/survey-reports/SurveyReports';
import SurveyEditor from './domains/surveys/surveys-all/survey-editor/SurveyEditor';
import SurveySelection from './domains/surveys/surveys-all/survey-selection/SurveySelection';
import UserProfile from './domains/user-profile/UserProfile';
import OrganizationsList from './domains/organizations/organizations-list/OrganizationsList';
import NewOrganization from './domains/organizations/new-organization/NewOrganization';
import AttendanceVisitorsSettings from './domains/attendanceVisitors/attendanceVisitorsSettings/AttendanceVisitorsSettings';
import StudentProfile from './domains/studentProfile/StudentProfile';
import AuthRolesProvider from './domains/auth/auth-role-provider/AuthRoleProvider';
import authRoles, {
  publicAccess,
} from './domains/auth/auth-role-provider/assets/authRoles';
import { RolesEnum } from './domains/auth/auth-role-provider/assets/rolesEnum';

interface IPrivateRoute {
  allowedRoles?: (keyof typeof RolesEnum)[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.FC<any>;
  path?: string;
  exact?: boolean;
  render?: (() => JSX.Element) | (() => Element);
}

const PrivateRoute = ({
  component: Component = () => <div />,
  allowedRoles = publicAccess,
  ...rest
}: IPrivateRoute) => {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const user = useAppSelector(({ auth }) => auth.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated && user ? (
          <AuthRolesProvider allowedRoles={allowedRoles}>
            <Component {...props} />
          </AuthRolesProvider>
        ) : (
          <Redirect
            to={{ pathname: PATHS.login, state: { destination: rest.path } }}
          />
        );
      }}
    />
  );
};

const PageNotFound = () => <div>page not found</div>;

const School: React.FC = () => {
  return (
    <Navigation>
      <Switch>
        <PrivateRoute
          exact
          path={PATHS.school}
          component={AttendanceDashboard}
        />
        <PrivateRoute
          exact
          path={PATHS.attendanceDashboard}
          component={AttendanceDashboard}
        />
        <PrivateRoute
          exact
          path={PATHS.attendanceReports}
          component={AttendanceReports}
        />
        <PrivateRoute
          exact
          path={PATHS.attendanceVisitors}
          component={AttendanceVisitors}
          allowedRoles={authRoles.visitors}
        />
        <PrivateRoute
          exact
          path={PATHS.attendanceVisitorsSettings}
          component={AttendanceVisitorsSettings}
          allowedRoles={authRoles.visitors}
        />
        <PrivateRoute
          exact
          path={PATHS.idCards}
          component={IdCards}
          allowedRoles={authRoles.digitalIdCards}
        />
        <PrivateRoute
          exact
          path={PATHS.incidentsAlerts}
          component={IncidentsAlerts}
        />
        <PrivateRoute
          exact
          path={PATHS.incidentsHealthCases}
          component={IncidentsHealthCases}
        />
        <PrivateRoute
          exact
          path={PATHS.incidentsReportingTool}
          component={IncidentsReportingTool}
        />
        <PrivateRoute
          exact
          path={PATHS.incidentsReports}
          component={IncidentReports}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationBadge}
          component={OrganizationBadgeRequest}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationParents}
          component={OrganizationParents}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationProfileCompletion}
          component={OrgProfileCompletion}
        />

        <PrivateRoute
          exact
          path={PATHS.organizationQr}
          component={QrGenerator}
          allowedRoles={authRoles.qrGenerator}
        />

        <PrivateRoute
          exact
          path={PATHS.organizationStaff}
          component={OrganizationStaff}
          allowedRoles={authRoles.staffList}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationStaffEdit}
          component={OrganizationStaffEdit}
          allowedRoles={authRoles.staffList}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationUsers}
          component={OrganizationUsers}
          allowedRoles={authRoles.userList}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationUsersEdit}
          component={OrganizationUsersEdit}
          allowedRoles={authRoles.userList}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationUsersNew}
          component={OrganizationUsersNew}
          allowedRoles={authRoles.accountGenerator}
        />
        <PrivateRoute
          exact
          path={PATHS.schoolBusAttendance}
          component={BusAttendance}
          allowedRoles={authRoles.schoolBusAttendance}
        />
        <PrivateRoute
          exact
          path={PATHS.schoolBusRouteTracker}
          component={RouteTracker}
          allowedRoles={authRoles.schoolBusRouteTracker}
        />
        <PrivateRoute exact path={PATHS.sms} component={Sms} />
        <PrivateRoute
          exact
          path={PATHS.studentProfile}
          component={StudentProfile}
        />
        <PrivateRoute
          exact
          path={PATHS.organizationsList}
          component={OrganizationsList}
        />
        <PrivateRoute
          exact
          path={PATHS.newOrganization}
          component={NewOrganization}
        />
        <PrivateRoute
          exact
          path={PATHS.surveysAll}
          component={SurveySelection}
          allowedRoles={authRoles.surveySettings}
        />
        <PrivateRoute
          exact
          path={PATHS.surveysNew}
          component={SurveyEditor}
          allowedRoles={authRoles.surveySettings}
        />
        <PrivateRoute
          exact
          path={PATHS.surveysReports}
          component={SurveyReports}
          allowedRoles={authRoles.surveyReports}
        />
        <PrivateRoute
          exact
          path={PATHS.surveys}
          component={SurveySelection}
          allowedRoles={authRoles.surveySettings}
        />
        <PrivateRoute
          path={PATHS.surveyWithId}
          component={SurveyEditor}
          allowedRoles={authRoles.surveySettings}
        />
        <PrivateRoute
          exact
          path={PATHS.orgStudentsAll}
          component={StudentSelection}
          allowedRoles={authRoles.studentList}
        />
        <PrivateRoute
          exact
          path={PATHS.orgStudentsNew}
          component={StudentEditor}
          allowedRoles={authRoles.studentList}
        />
        <PrivateRoute path={PATHS.orgStudentWithId} component={StudentEditor} />

        <PrivateRoute exact path={PATHS.profile} component={UserProfile} />
        <PrivateRoute
          render={() => <Redirect to={PATHS.attendanceDashboard} />}
          allowedRoles={authRoles.attendanceDashboard}
        />
      </Switch>
    </Navigation>
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path={PATHS.checkIn}
          allowedRoles={authRoles.qRAndFaceScanning}
          component={CheckIn}
        />
        <PrivateRoute
          exact
          path={PATHS.checkOut}
          component={CheckOut}
          allowedRoles={authRoles.qRAndFaceScanning}
        />
        <Route exact path={PATHS.forgotPassword} component={ForgotPassword} />
        <Route exact path={PATHS.home} component={Home} />
        <Route exact path={PATHS.login} component={Login} />
        <Route exact path={PATHS.privacyPolicy} component={PrivacyPolicy} />
        <PrivateRoute
          exact
          path={PATHS.healthScreening}
          component={HealthScreening}
          allowedRoles={authRoles.healthScreening}
        />
        <Route exact path={PATHS.profileSetup} component={ProfileSetup} />
        <Route path={PATHS.pageNotFound} component={PageNotFound} />
        <Route path={PATHS.school} render={() => <School />} />
        <Redirect to={PATHS.pageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
