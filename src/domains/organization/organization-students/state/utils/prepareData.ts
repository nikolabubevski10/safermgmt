import { IDataStudent, IStudent } from '../types';

const prepareData = (data: IDataStudent[]): IStudent[] => {
  const newData = data.map(
    ({
      adaGrade,
      adaGradeDescription,
      address,
      chronoGrade,
      chronoGradeDescription,
      currentlyEnrolled,
      dateOfBirth,
      emailAddress,
      firstName,
      gender,
      id,
      lastName,
      middleName,
      phoneNumber,
      race,
      school,
    }) => {
      const newAddress = address?.map((address) => ({
        addressType: address.addressType || '',
        primaryAddress: !!address.primaryAddress,
        line1: address.line1 || '',
        line2: address.line2 || '',
        city: address.city || '',
        state: address.state || '',
        zipCode: address.zipCode || '',
      }));

      const newEmailAddress = emailAddress?.map((email) => ({
        primaryEmail: !!email.primaryEmail,
        emailAddress: email.emailAddress || '',
      }));

      const newPhoneNumber = phoneNumber?.map((pn) => ({
        phoneType: pn.phoneType || '',
        primaryPhone: !!pn.primaryPhone,
        areaCode: pn.areaCode || '',
        phoneNumber: pn.phoneNumber || '',
      }));

      return {
        adaGrade: adaGrade || '',
        adaGradeDescription: adaGradeDescription || '',
        address: newAddress || [],
        chronoGrade: chronoGrade || '',
        chronoGradeDescription: chronoGradeDescription || '',
        currentlyEnrolled: !!currentlyEnrolled,
        dateOfBirth: dateOfBirth || null,
        emailAddress: newEmailAddress || [],
        firstName: firstName || '',
        gender: gender || '',
        id: id || 0,
        lastName: lastName || '',
        middleName: middleName || '',
        phoneNumber: newPhoneNumber || [],
        race: race || '',
        school: {
          id: school?.id ? school.id : 0,
          schoolName: school?.schoolName ? school.schoolName : '',
          schoolTypeDescription: school?.schoolTypeDescription || '',
        },
      };
    },
  );

  return data ? newData : [];
};

export default prepareData;
