import { RolesEnum } from './roles';

export default {
  students: {
    label: 'Students',
    value: 'Students',
    associatedRoles: [RolesEnum.Student],
  },
  staffMembers: {
    label: 'Staff Members',
    value: 'staffMembers',
    associatedRoles: [RolesEnum.Staff, RolesEnum.Teacher],
  },
  studentContacts: {
    label: 'Student Contacts',
    value: 'studentContacts',
    associatedRoles: [RolesEnum.Student],
  },
};
