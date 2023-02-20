import {
  IPerson,
  TDataSchoolUser,
  IContact,
  IDataContact,
  TDataStudent,
} from '../types';
import { RolesEnum } from '../assets/roles';

const prepareGetSchoolUsersData = (
  data: TDataSchoolUser[],
  schoolId: string,
): IPerson[] => {
  const result = data.map((dataSchoolUser) => {
    const { roles: dataUserRoles, name, id } = dataSchoolUser;
    const { student, teacher, staff } = dataUserRoles;

    const userRoles: string[] = [
      student ? RolesEnum.Student : '',
      teacher ? RolesEnum.Teacher : '',
      staff ? RolesEnum.Staff : '',
    ].filter((role) => role !== '');

    const valueToEncode = JSON.stringify({
      id,
      name: `${name.first} ${name.last}`,
      schoolId,
    });

    const firstName = name.first || '';
    const middleName = name.middle || '';
    const lastName = name.last || '';

    const prepareStudentContacts = (student: TDataStudent): IContact[] => {
      if (!student) return [];
      return student?.contacts.map(
        (contact: IDataContact): IContact => {
          const {
            userAccount,
            relationship: dataRelationship,
            relationshipType: dataRelationshipType,
          } = contact;

          const { first, middle, last } = userAccount.name;
          const firstName = first || '';
          const middleName = middle || '';
          const lastName = last || '';

          const id = userAccount.id || '';

          const relationship = dataRelationship ? dataRelationship.name : '';
          const relationshipType = dataRelationshipType
            ? dataRelationshipType.name
            : '';

          const valueToEncode = JSON.stringify({
            id,
            name: `${firstName} ${lastName}`,
          });

          return {
            firstName,
            middleName,
            lastName,
            id,
            isSelected: false,
            relationship,
            relationshipType,
            valueToEncode,
          };
        },
      );
    };

    const contacts = student ? prepareStudentContacts(student) : [];

    return {
      firstName,
      middleName,
      lastName,
      id,
      isSelected: false,
      roles: userRoles,
      valueToEncode,
      contacts,
      schoolId,
    };
  });
  return result;
};

export default prepareGetSchoolUsersData;
