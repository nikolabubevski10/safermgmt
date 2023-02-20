import { combineReducers } from 'redux';
import attendance from '../domains/attendance/state/AttendanceReducer';
import attendanceDashboard from '../domains/attendance-dashboard/state/AttendanceDashboardReducer';
import attendanceVisitors from '../domains/attendanceVisitors/state/AttendanceVisitorsReducer';
import auth from '../domains/auth/AuthReducer';
import busAttendance from '../domains/schoolBus/bus-attendance/state/BusAttendenceReducer';
import contact from '../domains/contactModal/ContactModalReducer';
import generator from '../domains/qr/generator/state/GeneratorReducer';
import navigation from '../domains/navigation/state/NavigationReducer';
import organizations from '../domains/organizations/state/OrganizationsReducer';
import organizationUsers from '../domains/organization/organization-users/OrganizationUsersReducer';
import orgStudents from '../domains/organization/organization-students/state/OrgStudentsReducer';
import studentProfile from '../domains/studentProfile/state/StudentProfileReducer';
import surveyReports from '../domains/surveys/survey-reports/state/SurveyReportsReducer';
import surveys from '../domains/surveys/surveys-all/state/SurveysReducer';

export default combineReducers({
  attendance,
  attendanceDashboard,
  attendanceVisitors,
  auth,
  busAttendance,
  contact,
  generator,
  navigation,
  organizations,
  organizationUsers,
  orgStudents,
  studentProfile,
  surveyReports,
  surveys,
});
