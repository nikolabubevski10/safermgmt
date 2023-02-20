import { RolesEnum } from './rolesEnum';
const {
  busDriver,
  contact,
  districtAdmin,
  MedicalAdmin,
  SchoolTechLead,
  staff,
  student,
  teacher,
} = RolesEnum;

export const publicAccess = [
  busDriver,
  contact,
  districtAdmin,
  MedicalAdmin,
  SchoolTechLead,
  staff,
  student,
  teacher,
];

export default {
  accountGenerator: [districtAdmin, SchoolTechLead],
  attendanceDashboard: [teacher, staff, districtAdmin],
  digitalIdCards: [districtAdmin, SchoolTechLead],
  healthScreening: publicAccess,
  medicalAlerts: [MedicalAdmin],
  qRAndFaceScanning: [teacher, staff, districtAdmin],
  qrGenerator: [districtAdmin, staff],
  schoolBusAttendance: [staff, districtAdmin],
  schoolBusRouteTracker: [staff, districtAdmin],
  schoolList: [districtAdmin],
  staffList: [districtAdmin, SchoolTechLead],
  studentList: [teacher, staff, districtAdmin],
  surveyReports: [districtAdmin, MedicalAdmin, SchoolTechLead],
  surveySettings: [staff, districtAdmin],
  userList: [districtAdmin, SchoolTechLead],
  visitors: [districtAdmin, SchoolTechLead],
};
