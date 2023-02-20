export interface IDataStudent {
  adaGrade?: string;
  adaGradeDescription?: string;
  address?: {
    addressType?: string;
    primaryAddress?: boolean;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    zipCode: string;
    __typename: 'StudentAddress';
  }[];
  chronoGrade?: string;
  chronoGradeDescription?: string;
  currentlyEnrolled?: boolean;
  dateOfBirth?: Date;
  emailAddress?: {
    primaryEmail?: boolean;
    emailAddress?: string;
    __typeName: 'StudentEmailAddress';
  }[];
  firstName?: string;
  gender?: string;
  id?: number;
  lastName?: string;
  middleName?: string;
  phoneNumber?: {
    phoneType?: string;
    primaryPhone?: boolean;
    areaCode?: string;
    phoneNumber?: string;
    __typename: 'StudentPhoneNumber';
  }[];
  race?: string;
  school?: {
    id?: number;
    schoolName?: string;
    schoolTypeDescription?: string;
    __typename: 'School';
  };
  __typename: 'Student';
}

export interface IStudent {
  adaGrade: string;
  adaGradeDescription: string;
  address: {
    addressType: string;
    primaryAddress: boolean;
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: string;
  }[];
  chronoGrade: string;
  chronoGradeDescription: string;
  currentlyEnrolled: boolean;
  dateOfBirth: Date | null;
  emailAddress: {
    primaryEmail: boolean;
    emailAddress: string;
  }[];
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
  middleName: string;
  phoneNumber: {
    phoneType: string;
    primaryPhone: boolean;
    areaCode: string;
    phoneNumber: string;
  }[];
  race: string;
  school: {
    id: number;
    schoolName: string;
    schoolTypeDescription: string;
  };
}
